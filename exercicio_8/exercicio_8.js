/** 8. Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado seu raio e sua altura*/

 let raio = Number(prompt("Inserir o valor do raio: "))
 let altura = Number(prompt("Inserir o valor altura: "))
 let volume = 3.14159 * Math.pow(raio,2) * altura
 alert("O volume da lata de oleo é: " + volume)