export default function negate(predicate) {
  return function (...params) {
    return !predicate(...params)
  }
}
