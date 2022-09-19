/** 3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma */

 let raio = Number(prompt("Inserir o valor do raio"))
 const valorPi = 3.14159
 raio = raio ** 2
 
 let calculo = valorPi * raio
 alert("Valor da área: " + calculo)
 calculo = 2 * valorPi * raio
 alert("Valor do perimetro: " + calculo)