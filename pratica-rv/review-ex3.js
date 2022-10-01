/*3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.*/

const raioCircunferencia = Number(prompt('Por favor indique o tamanho do raio da circunferência para que sejam calculados a área e o perímetro da mesma'))
const pi = 3.14
const areaCircunferencia = (pi * (raioCircunferencia ** 2) )
const perimetroCircunferencia = ( 2 * pi * raioCircunferencia)

alert ('O valor da área da circunferencia equivale a' + areaCircunferencia + ' e do perímetro equivale a ' + perimetroCircunferencia + '.')