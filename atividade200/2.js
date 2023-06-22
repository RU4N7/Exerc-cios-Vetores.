function calcularSomaVetor() {
    let vetor = []; // Vetor para armazenar os números
    let soma = 0; // Variável para armazenar a soma dos valores
  
    // Lendo os valores do vetor
    for (let i = 0; i < 10; i++) {
      vetor[i] = parseInt(prompt(`Digite o número ${i + 1}:`));
    }
  
    // Calculando a soma dos valores
    for (let i = 0; i < 10; i++) {
      soma += vetor[i];
    }
  
    // Escrevendo o resultado
    document.write(`A soma dos valores do vetor é: ${soma}<br>`);
  }
  
  // Chamando a função para executar o algoritmo
  calcularSomaVetor();
  