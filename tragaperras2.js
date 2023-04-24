/*
   Crear un juego de tragaperras que genere una jugada calculando tres combinaciones 
   de frutas de un total de 5 frutas diferentes.
   Además en cada jugada se calculará una apuesta de un valor entre 1 y 10.
   El premio será un múltipo de la apuesta juegada cuando ocurran cualquiera de estas 
   combinaciones:
   x1 si coinciden la fruta 1 y 3
   x3 si coinciden la fruta 2 y 3
   x5 si coinciden la fruta 1 y 2
   x7 si coinciden la fruta 1, 2 y 3
*/


// Tenemos nuestro ARRAY de 0 a 4 elementos y 5 frutas.

const frutas = ["🍏", "🍐", "🍊", "🍋", "🍌"];


const a = frutas[Math.floor(Math.random() * frutas.length)];
const b = frutas[Math.floor(Math.random() * frutas.length)];
const c = frutas[Math.floor(Math.random() * frutas.length)];
//const d = frutas[Math.floor(Math.random() * frutas.length)];
//const e = frutas[Math.floor(Math.random() * frutas.length)];

let apuesta = Math.floor(Math.random() * 10 + 1);;;;;;;;;;

let combinaciones =  a + b + c;

if (combinaciones === frutas[0] + frutas[3] + frutas[0] || combinaciones === frutas[3] + frutas[2] + frutas[3] || combinaciones === frutas[4] + frutas[2] + frutas[4] || combinaciones === frutas[2] + frutas[1] + frutas[3]){
    console.log(combinaciones);
    console.log(`Tu premio es de ${apuesta * 2} , Enhorabuena!`);
    
} else if (combinaciones === frutas[2] + frutas[1] + frutas[1] || combinaciones === frutas[0] + frutas[4] + frutas[4] || combinaciones === frutas[4] + frutas[3] + frutas[3] || combinaciones === frutas[1] + frutas[0] + frutas[0]){
    console.log(combinaciones);
    console.log(`Tu premio es de ${apuesta * 3} , Enhorabuena!`);

} else if (combinaciones === frutas[0] + frutas[0] + frutas[1] || combinaciones === frutas[2] + frutas[2] + frutas[3] || combinaciones === frutas[3] + frutas[3] + frutas[1] || combinaciones === frutas[4] + frutas[4] + frutas[2]){
    console.log(combinaciones);
    console.log(`Vas mejorando! Tu premio es de ${apuesta * 5} , Enhorabuena!`);

} else if (combinaciones === frutas[2] + frutas[2] + frutas[2] || combinaciones === frutas[3] + frutas[3] + frutas[3] || combinaciones === frutas[1] + frutas[1] + frutas[1]){
    console.log(combinaciones);
    console.log(`Increible!! Tu premio es de ${apuesta * 7} ,Enhorabuena!`);

} else {
    console.log(`La combinacion no es buena! ${combinaciones} a por una cocacolita y a seguir que es gratis!`)
} 


//if (combinaciones == frutas["0", "2","0"]){
//    console.log(`Maquina ${combinaciones} y tu premio es de ${apuesta * 2}`);
//} else if (combinaciones == frutas["2", "1","1"]){
//    console.log(`Maquina ${combinaciones} y tu premio es de ${apuesta * 3}`);
//} else if (combinaciones == frutas["4", "4","3"]){
//    console.log(`Maquina ${combinaciones} y tu premio es de ${apuesta * 5}`);
//}




//console.log(combinaciones);;




































