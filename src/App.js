import React, { useState } from 'react';
import Inputs from './components/Inputs';
import DataTable from './components/DataTable';
import ChartDisplay from './components/ChartDisplay';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported
import './App.css'; // Optional: Add custom styles if needed

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // Function to fetch data from the weather API
  const fetchData = async ({ latitude, longitude, startDate, endDate }) => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude,
          longitude,
          start_date: startDate,
          end_date: endDate,
          daily: 'temperature_2m_max,temperature_2m_min,temperature_2m_mean',
        },
      });

      // Map and format the response data
      const formattedData = response.data.daily.time.map((date, index) => ({
        date,
        maxTemp: response.data.daily.temperature_2m_max[index],
        minTemp: response.data.daily.temperature_2m_min[index],
        meanTemp: response.data.daily.temperature_2m_mean[index],
      }));

      setData(formattedData);
    } catch (error) {
      alert('Failed to fetch data. Please check your inputs.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Weather Dashboard</h1>

      {/* Input form component */}
      <div className="mb-8">
        <Inputs onSubmit={fetchData} />
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          {/* Chart Display */}
          <div className="mb-6">
            <ChartDisplay data={data} />
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <DataTable data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
