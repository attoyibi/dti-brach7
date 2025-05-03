const nameObject = {
    "key" : "value"
}

// let nama = "anisa"

let person = {
    name: "muchson",
    title: "tutor",
    age: 25
}
const listStudent = [
    {
        name:"rizky",
        age: 20
    },
    {
        name: "anisa",
        age: 20
    },
    
];
//console.log(person.age);
//console.log(listStudent[0].name);
//listStudent.forEach()
//function itu bayangkan sebagai saklar

//function nyalakanLampu(){
    //console.log("Lampu Menyala");
    //let lebarPersegi = 3*3;
    //return lebarPersegi;
// }
//console.log(nyalakanLampu())
//console.log("Di Bawah Lampu");

//function nyalakanLampu(){
//console.log("Lampu Menyala");
//}

//console.log("Di Bawah Lampu");


// function nyalakanLampu(){
//     return "Lampu Nyala";
// }

// console.log(nyalakanLampu());

// function nyalakanLampu(nama){
//     console.log("log di dalam function : ", nama);
//     return "lampu nyala";
// }

// console.log(nyalakanLampu(listStudent[0].name, "langsung"));
// console.log(nyalakanLampu(listStudent[1].name, "langsung"));

// function sapa(nama) {
//     return "Halo, " + nama + "! Selamat datang ";
// }

// let pesan = sapa("Anisa");
// console.log(pesan);

// function celciusKeFahrenheit(celcius){
//     let fahrenheit = (celcius * 9/5) + 32;
//     return fahrenheit;
// }
// console.log(celciusKeFahrenheit(40));
    
//ini dinamakan arrow function dan sering sekali terpakai
//= () => {} anonimus function
// let variabelArrowFunction = () => {
//     console.log("di dalam arrow function")
// }
// variabelArrowFunction()

//let variabelArrowFunction = function namaFunction(){}
//ini yang normal  
// let globalVar = "global123";
// function  nyalakanLampu(nama, dataString){
//     console.log("log di dalam funvction : ", nama);
//}

// let nama = "rizky"
// function nyalakanLampu(nama) {
//  //sama dengan dua kali "==" artinya membandingkan

//    if (nama == "rizky") {
//     console.log("hai rizky, lampu nyala ni", nama);
//    }
//    console.log("bukti kalau function nyala")
// }

// nyalakanLampu(nama)
// //console.log("dibawah lampu")


// let mobil = "avanza"
// function jenisMobil(mobil) {
//     if (mobil == "avanza") {
//         console.log("Mobil avanza ini berwarna abu-abu ", mobil)
//     }
//     console.log("bukti kalau mobil benar warna abu-abu")
// }

// jenisMobil(mobil)


//contoh for
for (let index = 0; index <Array.length; index++) {
    console.log(index);
}

