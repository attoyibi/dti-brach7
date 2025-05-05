const listMakanan = [
  {
    appetizer: 'kentang goreng',
  },
  {
    mainCourse: 'nasi padang',
  },
  {
    dessert: [
      //"sweet" : "pannacota",
      //"savory" : "spicy pretzel",
    ],
  },
];

// function konversiCurrency(teks, nilaiUang) {
//   let rumus = nilaiUang * 15000;
//   return teks + rumus;
// }

// console.log(konversiCurrency('uang anda saat ini : ', 3));

//console.log(listMakanan);

let makanan = 'matang';

function memasakMakanan(lauk) {
  let lauk;
  if (makanan == 'mentah') {
    console.log('Makanan harus dimasak dulu!');
  } else if (makanan == 'matang') {
    console.log('Makanan sudah siap makan!');
  }
  console.log('silahkan beli dulu makanannya!');
}

memasakMakanan(lauk);
