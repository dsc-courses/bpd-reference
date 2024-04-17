// DataFrameComponent.jsx
import React from 'react';
import '../src/css/dataframe-styles.css';

const DataFrameComponent = ({ data }) => {
  let columns = [];
  let rows = [];
  let indexName = "";
  let indexValues = [];

  if (data) {
    const parsedData = JSON.parse(data);
    columns = parsedData.columns || [];
    rows = parsedData.data || [];
    indexName = parsedData.indexName || "Index"; // Use the provided index name
    indexValues = parsedData.index || []; // The index values
  }

  return (
    <div className='dataframe-container'>
      <table className="dataframe-table">
        <thead>
          <tr>
            <th>{indexName}</th> {/* Render the index name */}
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{indexValues[rowIndex]}</td> {/* Render index values */}
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataFrameComponent;
