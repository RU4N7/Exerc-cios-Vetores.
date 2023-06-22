let v = [];

for (let i = 0; i < 10; i ++){
    v[i] = Math.floor(Math.random() * 100);
}
document.write(`vetor = [${v}] <br>`);
document.write(`<hr>`);
document.write(`vetor ao contrario<br>`);



for(let i = v.length - 1; i >= 0; i --){
    document.write(`${v[i]}`)
}
v.reverse