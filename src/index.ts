let vector1 : number[] = new Array (6);
let nro : number, indice : number;
for (indice = 0; indice < 6; indice++) {
nro = Number(prompt(`Indique el número que desea incorporar en la posición ${indice} del primer vector: `));
vector1[indice] = nro;
}
for (indice = 0; indice < 6; indice++) {
console.log(`El número en la posición ${indice} es ${vector1[indice]}`);
}
let vector2 : number[] = new Array (6);
for (indice = 0; indice < 6; indice++) {
nro = Number(prompt(`Indique el número que desea incorporar en la posición ${indice} del segundo vector: `));
vector2[indice] = nro;
}
for (indice = 0; indice < 6; indice++) {
console.log(`El número en la posición ${indice} es ${vector2[indice]}`);
}
let sumaDeVectores : number[] = new Array (6);
for (indice = 0; indice < 6; indice++) {
indice=vector1[indice]+vector2[indice]
}
for (indice = 0; indice < 6; indice++) {
console.log(`La suma de los vectores es ${sumaDeVectores[vector1[indice+vector2[indice]]]}`);
}
