import React, { useState } from 'react';
import Papa from 'papaparse';

function CSVReader() {
  const [data, setData] = useState([]);

  // Function to handle CSV file input and parsing
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    // Check if a file is selected
    if (file) {
      Papa.parse(file, {
        header: true, // Treat the first row as a header
        complete: (result) => {
          // Parse complete; result.data will contain the parsed data
          setData(result.data);
        },
        error: (error) => {
          console.error('Error parsing CSV:', error.message);
        },
      });
    }
  };

  return (
    <div>
      <h2>CSV Reader</h2>
      <input type="file" accept=".csv" onChange={handleFileInputChange} />
      <div>
        <h3>Parsed Data:</h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default CSVReader;
