/*6. Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.*/

const numA = parseInt(prompt('Informe o num A'))
const numB = parseInt(prompt('Informe o num B'))

const calculo = numA / numB
const calculoResto = numA % numB
alert ('O quociente de A dividido por B é igual a: ' + calculo + '.') 
alert ('O resto da divisão entre A por B é igual a: ' + calculoResto + ' .') 
