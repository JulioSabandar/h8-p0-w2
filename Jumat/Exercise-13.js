function xo(str) {
  // you can only write your code here!
  numX = 0;
  numO = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      numX++
    } else { numO++ }
  }
  bool = false;
  if (numX === numO) {
    bool = true;
  }
  return bool;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
