/*2. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.*/

const ladoQuadrado = Number(prompt('Por favor indique o valor do lado de um quadrado para que sejam calculados a área e o perímetro do mesmo.'))

const areaQuadrado = ladoQuadrado * ladoQuadrado
const perimetroQuadrado = ladoQuadrado * 4

alert ('Então a área do quadrado é ' + areaQuadrado + ' e o perímetro do quadrado é ' + perimetroQuadrado + '.')
