
let n = [];

for(let i = 0; i < 10 ; i++){
    n[i] = Math.floor(Math.random() * 100);
}

document.write(` numeros = [${n}]`);
document.write(`<hr>`)

let p = 0 ;
let im = 0;

for(let i = 0; i < n.length; i ++){
    if ( n[i] % i == 0){
        p++;
    }else{
        im++
    }
}
document.write(`tem no vetor ${p} partes e ${im} impares`)