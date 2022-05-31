class Veiculo {
    rodas = 4;

    mover(){}
    virar(){}
}

class Moto extends Veiculo{
    constructor(){
        super() //Puxar atributos e métodos do pai
        this.rodas = 2;
    }
}