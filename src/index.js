const applyToCollection = require('./_helpers/applyToCollection')
const isArray = require('./_helpers/isArray')
const isObject = require('./_helpers/isArray')
const copyArray = require('./array/copy')
const copyObject = require('./object/copy')

module.exports = {
  copy: applyToCollection(copyArray, copyObject),
  isArray,
  isObject
}
