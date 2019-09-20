'use strict'

const clawer = require('./clawer')
const ampValidator = require('./amphtml-validator')
const csvGenerator = require('./csv-generator')
const uniq = require('lodash/uniqBy')
const csvReader = require('./csv-parser')

csvReader('./data/urls.csv')
  .then((urls) => {
    urls.forEach(async (url) => {
      console.info(`------------------- Validating URL : ${url} -------------------`)
      const htmlBody = await clawer(url)
      const errMsg = await ampValidator(htmlBody)
      const data = uniq(errMsg.map((msg) => ({ url, ...msg })), 'position')
      csvGenerator(data)
    })
  })
