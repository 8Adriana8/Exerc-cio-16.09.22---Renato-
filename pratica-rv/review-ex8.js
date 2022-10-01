/*8. Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado
seu raio e sua altura.*/

const raio = Number(prompt('Indique o raio da lata de óleo '))
const altura = Number(prompt('Indique a altura da lata de óleo '))

const calculoVolume = 3.14 * (raio ** 2) * altura

alert('O volume da lata é de: ' + calculoVolume + '.')