// ESTRUTURADO
let valorHora = 50;
let valorEstimado = 20;
let desconto = valorHora * valorEstimado * (10/100)
let custoEstimado = valorHora * valorEstimado - desconto;

//POO
const job = new Job()
job.valorHora = 50;
job.valorEstimado = 20
job.tempoEstimado = 20;
job.desconto = 10;
const custoEstimad = job.calcularEstimativa()
console.log(custoEstimado)