var nama = '' // input name here
var peran = '' // input role here

nama? console.log(`Selamat datang di Dunia Proxytia, ${nama}`) : console.log('Nama harus diisi!');

if (peran === 'Ksatria') {
  console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
}
else if (peran === 'Tabib') {
  console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
}
else if (peran === 'Penyihir') {
  console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
}
