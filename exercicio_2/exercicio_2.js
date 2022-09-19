/** 2. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.*/

 let ladoQuadrado = Number(prompt("Insira o valor de um lado do quadrado"))
 let calculo = Math.pow(ladoQuadrado, 2)
 alert("Área do quadrado: " + calculo)
 
 calculo = ladoQuadrado * 4
 
 alert("Perimetro do quadrado: " + calculo)