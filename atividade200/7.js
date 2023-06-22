let v = []

for(let i = 0; i < 10; i ++){
    v[i] = Math.floor(Math.random() * 100);
}

document.write(`v = [${v}]`);
document.write(`<hr>`)
//let menor = +Infinity;//
let menor = Number.MAX_VALUE;
let pos =0;

for(let i = 0; i < v.length; i  ++){
    if (v[i] < menor){
        pos = i;
        menor = v[i];
    }
}
document.write(`<hr>`);
document.write(`O menor numero e ${menor} e foi emcontrado na posiçao ${pos}`)

