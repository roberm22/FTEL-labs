console.log("Roberto Martin G14");
console.log("Laboratorio 3 - G14: Tabla de unidades binarias");
function unidad(e) {
    
     if (e===30) return "Gebi";
else if (e===40) return "Tebi";
else if (e===50) return "Pebi";
else if (e===60) return "Exbi";
else if (e===70) return "Zebi";

}

function dos_a(n) {
   var res = 1 ;
   while (n !== 0) {
       res = res * 2;
       n = n-1;
   }
   return res;
}

 console.log("1 " + unidad(30) + "byte = 2^30 Bytes = " + dos_a (30) + " Bytes");
 console.log("1 " + unidad(40) + "byte = 2^40 Bytes = " + dos_a (40) + " Bytes");
 console.log("1 " + unidad(50) + "byte = 2^50 Bytes = " + dos_a (50) + " Bytes");
 console.log("1 " + unidad(60) + "byte = 2^60 Bytes = " + dos_a (60) + " Bytes");
 console.log("1 " + unidad(70) + "byte = 2^70 Bytes = " + dos_a (70) + " Bytes");


