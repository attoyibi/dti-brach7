// pembuatan variabel var, let, const

// cara paling lama
// sudah jarang gunakan. mirip dengan let
var nama = 'muchson';
nama = 'rizky';
// lebih baru
// variable yang digunakan, jika isinya sering berubah
let pekerjaan = 'mentor DTI';
pekerjaan = 'pegawai';
pekerjaan = 'pelajar';
pekerjaan = 'guru';
// lebih baru
// variabel yang digunakan jika isinya tidak berubah
const alamat = 'madiun';
//alamat = "jakarta"// akan error karena nilai const tidak boleh berubah
// console.log(nama);// console itu menunjukkan data dalam variabel
// console.log(pekerjaan);
// console.log(alamat);

// primitive data type

//number : tipe data yang berguna jika di jumlah
let money_a = 93;
let money_b = 'kiki';
let jumlah = money_a + money_b;

let list_students = ['kiki', 'nisa', 2025];

// console.log("list peserta : ", list_students);
console.log('list peserta : ', list_students[2]);

const menuWarung = new Map([['key', 'value']]);
console.log('menu warung : ' + menuWarung.get('key'));
