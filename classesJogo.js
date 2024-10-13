class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia.";
                break;
            case "guerreiro":
                ataque = "espada.";
                break;
            case "monge":
                ataque = "artes marciais.";
                break;
            case "ninja":
                ataque = "shuriken.";
                break;
        }

        console.log(`O ${this.tipo}, chamado ${this.nome}, atacou usando ${ataque}`);
    }
}

let heroi1 = new Heroi("Joazinho", 21, "guerreiro");
let heroi2 = new Heroi("Felipinho", 22, "mago");
let heroi3 = new Heroi("Paulinho", 23, "ninja");
let heroi4 = new Heroi("Pedrinho", 24, "monge");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
