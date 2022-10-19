/** Aula - 21.09.22
 * 
 * 
 * Um posto está vendendo combustíveis com a seguinte tabela de descontos:
Alcool até 25 litros, desconto de 2% por litro
Alcool Acima de 25 litros, desconto de 4% por litro
Gasolina Até 25 litros, desconto de 3% por litro
Gasolina acima de 25 litros, desconto de 5% por litro

Escreva um algoritmo que leia os números de litros vendidos e  o tipo de combustível (codificado da seguinte forma: A- alcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$2.70 e o preço do litro do álcool é R$1.90. 


* 
 */



const tipoDeCombustivel = Number(prompt('Favor informe tipo de combustível selecionado pelo número: 1 para gasolina e 2 para álcool '))

const litrosVendidos = parseFloat(prompt('Favor informe quantos litros de combustível')) 
const message = ('Total a ser pago é de R$')

if (tipoDeCombustivel == 2 && litrosVendidos > 25) {
const total = 1.90 * litrosVendidos - 0.2
alert(message + ` ${total}`)
} else if (tipoDeCombustivel == 2 && litrosVendidos >= 25) {
    const total = 1.90 * litrosVendidos - 0.4
    alert(message + ` ${total}`)
} else if (tipoDeCombustivel == 1 && litrosVendidos >= 25) {
    const total = 2.70 * litrosVendidos - 0.3
    alert(message + ` ${total}`)
} else (tipoDeCombustivel == 1 && litrosVendidos > 25)
    {const total = 2.70 * litrosVendidos - 0.5
        alert(message + ` ${total}`)}


