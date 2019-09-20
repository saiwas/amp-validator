const csv = require('csv-parser');
const fs = require('fs');

module.exports = (path) => {
  const data = []

  return new Promise((resolve, reject) => {
    fs.createReadStream(path)
    .pipe(csv())
    .on('data', (row) => data.push(...Object.values(row)))
    .on('end', () => resolve(data))
    .on('error', (error) => reject(error))
  })
}