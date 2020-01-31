console.log('1. Menyusun Barisan Bintang');

var rows1 = 5; // input the number of rows

// do loops to display asterisks in the console.
for(index = 0; index <rows1; index++) {
  console.log('*');
}

console.log('2. Menyusun Barisan Bintang Dengan Nested Looping');
var rows2 = 5;
for(i = 0; i < rows2; i++) {
  printline = '';
  for (j = 0; j < rows2; j++) {
    printline += '*';
  }
  console.log(printline);
}

console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping');
var rows3 = 5;
for(i = 0; i < rows3; i++) {
  printline = '';
  for (j = 0; j <= i; j++) {
    printline += '*';
  }
  console.log(printline);
}
