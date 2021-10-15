const get = require('./get')
const set = require('./set')
const applyToCollection = require('./applyToCollection')

function copyObject(object) {
 const objectCopy = {}

 for (const key in object) {
   set(objectCopy, key, get(object, key))
 }

 return objectCopy
}


function copyArray(array) {
 const arrayCopy = []
 let leftIndex = -1
 let rightIndex = array.length

 while (++leftIndex <= --rightIndex) {
   set(arrayCopy, leftIndex, get(array, leftIndex))
   set(arrayCopy, rightIndex, get(array, rightIndex))
 }

 return arrayCopy
}

module.exports = applyToCollection(copyArray, copyObject)
