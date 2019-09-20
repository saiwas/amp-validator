'use strict';
const amphtmlValidator = require('amphtml-validator');

module.exports = async (htmlString) => {
  const validator = await amphtmlValidator.getInstance()
  const result = validator.validateString(htmlString)
  const outPutMsg = []

  for (let ii = 0; ii < result.errors.length; ii++) {
    const error = result.errors[ii];
    let msg = 'line ' + error.line + ', col ' + error.col + ': ' + error.message;
    if (error.specUrl !== null) {
      msg += ' (see ' + error.specUrl + ')';
    }
    outPutMsg.push({
        errorType: `${error.severity}`,
        position: `${error.line}-${error.col}`,
        msg
    })
  }

  return outPutMsg
}
