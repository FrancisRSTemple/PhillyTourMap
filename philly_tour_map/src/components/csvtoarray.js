
function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
  }
  
  const csvString = "troy,test,help\nnext,line,here";
  const array = csvToArray(csvString);
  console.log(array);