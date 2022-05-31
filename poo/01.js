class Pessoa{ //criando a classe
    constructor(){
        this.id = ~~(Math.random()*10000) //Colocando os parâmetros
        this.name = nome
    }

    dizerNome(){
        console.log(this.name)
    }
}

const pessoa = new Pessoa('Guilherme')
console.log(pessoa)