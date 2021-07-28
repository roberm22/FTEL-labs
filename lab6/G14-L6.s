   /* Roberto Martin, G14 */

.equ    stdout,      1
.equ    timer,       0x6d
.equ    writeNum,    0x6b
.equ    writeString, 0x69
.equ    halt,        0x11

  /*  Generar número aleatorio entre 0 y 255:
  
      var num = Math.random();     // Entre 0 y 1
      num = Math.floor(num * 256); // Entre 0 y 255 */

start:
  swi   timer       ; Número de milisegundos a R0
  and   r0,r0,#0xFF ; Aplicar máscara que deja 8 últimos bits
  ldr   r4,=num     ; Cargar puntero a variable num en R4
  str   r0,[r4]     ; Guardar número aleatorio (en R0) en num


  /*  console.log(str) */
  
  ldr r1,=Lote
  mov r0,#stdout
  swi 0x69 ; String

  /*  var str = "\nLo sentimos, no hay premio"; */

  ldr   r5,=str       ; Cargar puntero a variable str en R5
  ldr   r0,=SinPremio ; Cargar puntero a msj: SinPremio en RO
  str   r0,[r5]       ; Guardar puntero (en R0) en variable str

  /*  if (num < 51) { // probabilidad=20% (51/256)*/

  ldr   r0,[r4]     ; restaurar num en R0
  cmp   r0,#51      ; R0 < 51 (probabilidad=20%)
  bge   seguir      ; Saltar si mayor o igual que 51

         /*  str = "\nHa ganado 30 Euros"; */

  ldr   r0,=Premio
  str r0,[r5]

  /* } // Etiqueta seguir: permite saltar fuera del bloque */

seguir:

  /*  console.log(str); */
  
  mov r0,#stdout
  ldr r1,[r5]
  swi 0x69

  /*  console.log("num: " + num); */

  ldr   r1,=String
  swi   0x69
  
  ldr   r1, [r4]
  swi   0x6b


final:
  swi   halt          ; Finalizar ejecución


.data     /*  definición de variables y mensajes    */

num:        .word  0  ; variable num
str:        .word  0  ; variable str
Lote:       .asciz "Loteria de Roberto Martin Luengo"
String:     .asciz "\nnum: \n"
Premio:     .asciz "\nHa ganado 30 Euros\n"
SinPremio:  .asciz "\nLo sentimos, no hay premio\n"
.end

