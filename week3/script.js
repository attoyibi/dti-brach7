// src di week3 

// console.log("hello word", nama)

// object
const nameObject = {
    "key": "value"
}

// key = alamat rumah
//value = pemilik/isi dari rumah
let person = {
    name: "muchson",
    title: "tutor",
    age: 25
}
// contoh array of object
const listStudent = [
    //index 0
    {
        name: "rizky",
        age: 20
    },
    //index 1
    {
        name: "nisa",
        age: 20
    },
];


// console.log(listStudent[0].name);
// console.log(listStudent[1].name);
// listStudent.forEach()
//=============function=============================
// function itu bayangkan seperti sebuah saklar

function nyalakanLampuLog() {
    console.log("lampu Nyala")
}
// ini dinamakan arrow function dan sering bagnet di pakek
// let variabelArrowFunction = () => {
//     console.log("di dalam arrow function")
// }
// variabelArrowFunction();
// let variabelFunction = function namaFunction() {
// }
// let globalVar = "global123";

let nama = "muchson"
function nyalakanLampu(nama) {
    // sama dengan dua kali "==" artinya MEMBANDINGKAN. kalau beda balikannya akan FALSE
    // sama dengan tiga kali "===" artinya apa hayo ? 
    if (nama == "rizky") {
        console.log("hai rizky, lampu nyala ni");
    } else if (nama == "nisa") {
        console.log("hai nisa, lampu nyala ni");
    } else {
        console.log("wah bukan rizky dan nisa, lampu gak nyala ya");
    }
    console.log("bukti kalau functionnya nyala");

    // return "lampu nyala";
}

// nyalakanLampu(nama)
// console.log("di bawah lampu");

// contoh for 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

for (let index = 0; index < 5; index++) {
    console.log(index);
}
