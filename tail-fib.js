var factorial = function (n) {
  return recur(n, 1)
}
function recur (n, acc) {
    if (n === 0) {
      return acc
    } else {
      return recur(n-1, n*acc)
    }
  }

console.log(factorial(100000));
