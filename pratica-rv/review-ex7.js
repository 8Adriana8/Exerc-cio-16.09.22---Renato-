/*. Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), ler um
valor de temperatura em Fahrenheit e exibi-lo em Celsius*/

const fahrenheit = Number(prompt('Passe um valor de farenheit, para que ele seja passado para celcius.'))
const celcius = (5/9) * (fahrenheit - 32)
alert ('O valor de temperatura é ' + celcius + ' ºC .')