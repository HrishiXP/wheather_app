import React, { useState } from 'react';

const DataTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;  // Number of items to display per page

  // Calculate the index of the first and last item to show on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the data to get the items for the current page
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {/* Data Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Date</th>
              <th>Max Temp (°C)</th>
              <th>Min Temp (°C)</th>
              <th>Mean Temp (°C)</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.maxTemp}</td>
                <td>{row.minTemp}</td>
                <td>{row.meanTemp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
