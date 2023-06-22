let n = [];
let p = [];
let im = [];

for(let i = 0; i < 10; i ++){
    n[i] = Math.floor(Math.random() * 100);
}

document.write(`<hr>`);

for(let i = 0; i < n.length; i ++){
if (n [i] %2 == 0){
    p.push(n[i]);
}else {
    im.push(n[i]);
}
}
document.write(`numeros ${n}`)
document.write(`<hr>`)
document.write(`pares ${p}`)
document.write(`<hr>`)
document.write(`impares ${im}`)
