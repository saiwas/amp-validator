'use strict'
const axios = require('axios')

module.exports = async (url) => {
  try {
    const response = await axios.get(url);
    return response
  } catch (error) {
    console.error(error);
    return null
  }
}
