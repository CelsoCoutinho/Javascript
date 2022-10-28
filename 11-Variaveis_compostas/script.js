var val = [5, 6, 7, 3,]
var pos = val.indexOf(6)//server para saber onde esta localizado um valor no vector
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 6 Esta na posição ${pos} `)
}
/* 
//Exemplo com o While
while (pos < val.length) {
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
    pos++
}
//Exemplo com o For
for (let pos = 0; pos < val.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}
//Exemplo com o For mais curto
for (let pos in val) {
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}
*/


