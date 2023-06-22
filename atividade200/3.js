function verificarNumeroNoVetor() {
    let vetor = []; // Vetor para armazenar os números
  
    // Preenchendo o vetor com 8 números inteiros
    for (let i = 0; i < 8; i++) {
      vetor.push(parseInt(prompt(`Digite o número ${i+1}:`)));
    }
  
    let numero = parseInt(prompt("Digite o número a ser verificado:"));
  
    let posicao = vetor.indexOf(numero); // Obtém a posição do número no vetor
  
    if (posicao !== -1) {
     document.write(`O número está na posição ${posicao} do vetor.<br>`);
    } else {
      document.write("O número não se encontra no vetor.");
    }
  }
  
  verificarNumeroNoVetor();
  