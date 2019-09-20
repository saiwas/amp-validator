'use strict'

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'amphtml-validate-result.csv',
  header: [
    {id: 'url', title: 'URL'},
    {id: 'errorType', title: 'Error Type'},
    {id: 'msg', title: 'Message'}
  ]
});

module.exports = (data) => csvWriter.writeRecords(data)
