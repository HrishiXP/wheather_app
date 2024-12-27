import React, { useState } from 'react';

const Inputs = ({ onSubmit }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ latitude, longitude, startDate, endDate });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="latitude" className="block text-sm font-semibold text-gray-700">
            Latitude:
          </label>
          <input
            type="number"
            id="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            className="form-control"
            placeholder="Enter Latitude"
          />
        </div>
        <div>
          <label htmlFor="longitude" className="block text-sm font-semibold text-gray-700">
            Longitude:
          </label>
          <input
            type="number"
            id="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            className="form-control"
            placeholder="Enter Longitude"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700">
            Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700">
            End Date:
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="form-control"
          />
        </div>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="btn btn-primary w-full py-2 px-4 mt-4"
        >
          Fetch Weather Data
        </button>
      </div>
    </form>
  );
};

export default Inputs;
