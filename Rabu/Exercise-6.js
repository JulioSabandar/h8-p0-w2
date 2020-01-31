

//1. Melakukan Looping Menggunakan While
console.log('1. Melakukan Looping Menggunakan While\n')
console.log('LOOPING PERTAMA');
let index = 2;
while (index <= 20) {
  console.log(index + ' - I love coding');
  index += 2;
}
console.log('LOOPING KEDUA');
let index2 = 20
while (index2 > 0) {
  console.log(index2 + ' - I will become a fullstack developer');
  index2 -= 2;
}

//2. Melakukan Looping Menggunakan For
console.log('\n2. Melakukan Looping Menggunakan For\n')


console.log('LOOPING PERTAMA');

for (index = 1; index <= 20; index++) {
  console.log(index + ' - I love coding');
}
console.log('LOOPING KEDUA');

for (index2 = 20; index2 >= 1; index2--) {
  console.log(index2 + ' - I will become a fullstack developer');
}



//3. Angka Ganjil dan Genap
console.log('\n3. Angka Ganjil dan Genap\n')

for(i = 1; i <= 100; i++) {
  if(i%2 === 0) {
    console.log('GENAP');
  }
  else {
    console.log('GANJIL');
  }
}

console.log();

for (i = 1; i <= 100; i+=2) {
  if(i%3 === 0) {
    console.log(i + ' KELIPATAN 3');

  }
}


console.log();
for (i = 1; i <= 100; i+=5) {
  if(i%6 === 0) {
    console.log(i + ' KELIPATAN 6');
  }
}

console.log();
for (i = 1; i <= 100; i+=9) {
  if(i%10 === 0) {
    console.log(i + ' KELIPATAN 10');
  }
}
