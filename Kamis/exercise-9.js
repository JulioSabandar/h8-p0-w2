/*
 BUATLAH KODE FUNCTION DISINI
*/
console.log('Tugas 1');

function shoutOut() {
  return 'Halo Function!';
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console


console.log('\n' + 'Tugas 2');
/*
 BUATLAH KODE FUNCTION DISINI
*/

function calculateMultiply(num1,num2) {
  return num1*num2
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

console.log('\n' + 'Tugas 3');
/*
 BUATLAH KODE FUNCTION DISINI
*/
function processSentence(Name, Age, Address, Hobby) {
  return `Nama saya ${Name}, umur saya ${Age} tahun, alamat saya di ${Address}, dan saya punya hobby yaitu ${Hobby}!`
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
