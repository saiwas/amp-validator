'use strict'
const axios = require('axios')

module.exports = async (url) => {
  return axios.get(url)
    .then((response) => response.data)
    .catch((err) => {
      console.log('Clawer Error: ', err)
      return null
  });
}
