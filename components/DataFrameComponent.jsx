// DataFrameComponent.js
import React from 'react';
import '../src/css/dataframe-styles.css';

const DataFrameComponent = ({ data }) => {
  let columns = [];
  let rows = [];

  // Only attempt to parse `data` if it's not undefined
  if (data) {
    const parsedData = JSON.parse(data);
    columns = parsedData.columns || [];
    rows = parsedData.data || [];
  }

  return (
    <table className="dataframe-table">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataFrameComponent;
