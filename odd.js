function isOdd(num) {
  if (num === 0) return false;

  return (num & -num) === 1;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));