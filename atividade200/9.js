let at = [];

let soma = 0;
for(let i = 0; i < 10;i ++){
    at [i] = Math.floor(Math.random() * 10);
    soma += at[i];
}

let media = soma / at.length;

    document.write(`A media das alturas ${media.toFixed(2)} <br>`);
     for(let i = 0; i < at.length; i ++){
        if(at[i] > media){
    document.write(`O atleta ${i} tem uma altura de ${at[i]} <br>`);
        }
     }