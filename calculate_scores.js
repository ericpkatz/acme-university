const fs = require('fs');
/*
const template = (arr, str)=> {
  return arr.join(str);
};

console.log(template([1, 2, 3], '***'));
*/

fs.readFile('scores.js', (err, result)=> {
  if(err){
    console.log('err', err);
  }
  else {
    const rows = result.toString().trim().split('\n');
    const data = {};
    rows.forEach( row => {
      console.log(row);
      const parts = row.split(',');
      const name = parts[0];
      data[name] = parts.slice(1).reduce((a, b)=> a + b*1, 0) / (parts.length - 1)
    });
    console.log(data);
  }
});
