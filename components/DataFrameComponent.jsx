import React from 'react';
import '../src/css/dataframe-styles.css';

const formatCellData = (cellData) => {
  return (typeof cellData === 'boolean')
      ? cellData.toString().charAt(0).toUpperCase() + cellData.toString().slice(1)
      : cellData;
}

const DataFrameComponent = ({ data }) => {
  let columns = [];
  let rows = [];
  let indexName = "";
  let indexValues = [];
  if (data) {
    const parsedData = JSON.parse(data);
    columns = parsedData.columns || [];
    rows = parsedData.data || [];
    indexName = parsedData.indexName || "Index";
    indexValues = parsedData.index || [];
  }
  return (
      <div className='dataframe-container'>
        <table className="dataframe-table">
          <thead>
          <tr>
            <th>{indexName}</th>
            {columns.map((col, index) => (
                <th key={index}>{col}</th>
            ))}
          </tr>
          </thead>
          <tbody>
          {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="index-value">{indexValues[rowIndex]}</td>
                {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>
                      {formatCellData(cell)}
                    </td>
                ))}
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default DataFrameComponent;