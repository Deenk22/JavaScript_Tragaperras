
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


// Generar una jugada.
// Calcular combinaciones entre las 5 frutas diferentes, es decir, hay 5 tipos de fruta 
// y necesitamos una combinacion de 3 columnas.
// Cada jugada tiene un valor de entre 1 y 10.. y el premio es lo jugado por ; 



// COMENZAMOS MAQUINA TRAGAPERRAS ; // PRIMER INTENTO > Solo hay un poco de azar en el numero de combinaciones
// y la apuesta generada.


// Tenemos nuestro ARRAY de 0 a 4 elementos y 5 frutas.
const frutas = ["🍏", "🍐", "🍊", "🍋", "🍌"];


// En <"cada"> jugada se calculara una apuesta entre 1 y 10; 
let apuesta = Math.floor(Math.random()*10 + 1);;


//let combinaciones = frutas.length;
let combinaciones = Math.floor(Math.random() *10 + 0);

// Aqui empezamos con la sentencia IF > no se si estara correcto o no... pero a mi me ha enganchao! 

if (combinaciones <= 2)
{

        console.log(frutas[4], frutas[2], frutas[4]);
        console.log(`Tu premio es de ${apuesta * 2} , Enhorabuena!`);

} else if (combinaciones <= 3)
{
        console.log(frutas[1], frutas[3], frutas[3]);
        console.log(`Tu premio es de ${apuesta * 3} , Enhorabuena!`);

} else if (combinaciones <= 4)
{
        console.log(frutas[2], frutas[2], frutas[1]);
        console.log(`Vas mejorando! Tu premio es de ${apuesta * 5} , Enhorabuena!`);

} else if (combinaciones <= 5)
{
        console.log(frutas[0], frutas[0], frutas[0]);
        console.log(`Increible!! Tu premio es de ${apuesta * 7} ,Enhorabuena!`);

} else 
{
        console.log(`Comprate una cocacolita! y sigue intentandolo que es gratis!` || `A ver como avanza la cosa`);
       
}




//let combinacion = frutas[Math.floor(Math.random() * 5)];
//let combinacion2 = frutas[Math.floor(Math.random() * 5)];
//let combinacion3 = frutas[Math.floor(Math.random() * 5)];

//combinacion1 = frutas[1] && frutas[3];

//console.log(`Su premio es de ${apuesta * 1.25}`);
//console.log(`Su premio es de ${apuesta * 3}`);
//console.log(`Su premio es de ${apuesta * 5}`);
//console.log(`Su premio es de ${apuesta * 7}`);

//let p = frutas[0];
//let o = frutas[1];
//let i = frutas[2];
//let u = frutas[3];
//let y = frutas[4];

//let apuesta = Math.floor(Math.random()*10 + 1);

//if ( o && u){
//    console.log(`Tus ganancias son de ${apuesta*2}`);
//}