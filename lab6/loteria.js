 // nÃºmero aleatorio entre 0 y 255
var num = Math.random();     // Entre 0 y 1
num = Math.floor(num * 256); // Entre 0 y 255

var str = "\nLo sentimos, no hay premio";

if (num < 51) {  // probabilidad=20% (51/256)
  str = "\nHa ganado 30 Euros";
}

console.log(str);

console.log("num: " + num);

