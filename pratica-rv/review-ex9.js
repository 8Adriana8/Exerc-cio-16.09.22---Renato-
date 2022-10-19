/**Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
    normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
    para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento

    1 À vista em dinheiro ou cheque, recebe 10% de desconto
    2 À vista no cartão de crédito, recebe 15% de desconto
    3 Em duas vezes, preço normal de etiqueta sem juros
    4 Em três vezes ou mais, preço normal de etiqueta mais juros de 10%*/

   
    let precoProduto = parseFloat(prompt('Preco do produto escolhido.'))

    alert(`Digite o numero respectivo à escolha de opção de pagamento:

    1 À vista em dinheiro ou cheque, recebe 10% de desconto
    2 À vista no cartão de crédito, recebe 15% de desconto
    3 Em duas vezes, preço normal de etiqueta sem juros
    4 Em três vezes ou mais, preço normal de etiqueta mais juros de 10%

`)


    let condicaoPgto = Number(prompt('Número da condição de pagamento.'))

    if (condicaoPgto == 1) {
     const total =  precoProduto - 0.1  * precoProduto
     alert(`Entao o preço do produto é R$ ${total} reais`) //template string sempre com aspas. 
    }    
    else if (condicaoPgto == 2){
     const total =   precoProduto - (0.15  * precoProduto)
     alert(`Entao o preço do produto é R$ ${total} reais`) //template string sempre com aspas. 
    }
    else if(condicaoPgto == 3){
       const total = precoProduto
       alert(`Entao o preço do produto é R$ ${total} reais`) //template string sempre com aspas. 
    }
    else (condicaoPgto == 4){
       const total = precoProduto + (0.1  * precoProduto)
       alert(`Entao o preço do produto é R$ ${total} reais`) //template string sempre com aspas. 
    }

   

  