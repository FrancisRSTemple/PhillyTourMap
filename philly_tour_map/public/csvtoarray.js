
function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
  }
  
  const csvString = 'Name,Age,Occupation\nKeval Shah,30,Developer\nEsha Shah,25,Designer';
  
  const array = csvToArray(csvString);
  console.log(array);