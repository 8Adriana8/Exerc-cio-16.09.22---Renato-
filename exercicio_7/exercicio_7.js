/** Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), ler um
valor de temperatura em Fahrenheit e exibi-lo em Celsius */

let Fahrenheit = Number(prompt("Valor em Fahrenheit:"))
let Celsius = 5/9 * (Fahrenheit - 32)
alert("Temperatura em celsius: " + Celsius)