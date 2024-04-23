import React from 'react';
import '../src/css/series-styles.css';

const SeriesComponent = ({ data }) => {
  let indexValues = [];
  let values = [];
  let name = "";
  let dtype = "";

  if (data) {
    const parsedData = JSON.parse(data);
    name = parsedData.name || ""; // Series name
    dtype = parsedData.dtype || "Unknown type"; // Data type of the Series
    indexValues = parsedData.index || [];
    values = parsedData.data || [];
  }

  return (
    <div className='series-container'>
      <ul className="series-list">
        {values.map((value, index) => (
          <li key={index} className="series-item">
            <span className="series-index">{indexValues[index]}</span>
            <span className="series-value">{value}</span>
          </li>
        ))}
      </ul>
      <div className="series-footer">
        Name: {name}, dtype: {dtype}
      </div>
    </div>
  );
};

export default SeriesComponent;