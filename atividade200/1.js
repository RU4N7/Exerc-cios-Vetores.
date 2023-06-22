function calcularQuadrados() {
    let numeros = [];
  
    for (let i = 0; i < 10; i++) {
      let numero = parseInt(prompt("Digite um número:"));
      numeros.push(numero * numero);
    }
  
    console.log("Valores armazenados:");
    for (let i = 0; i < numeros.length; i++) {
      document.write(`numeros ${numeros[i]} <br>`);
    }
  }
  
  calcularQuadrados();
  