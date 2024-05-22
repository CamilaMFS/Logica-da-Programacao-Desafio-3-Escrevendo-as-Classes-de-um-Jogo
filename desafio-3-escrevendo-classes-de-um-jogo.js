class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'explosion';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'realizou um ataque';
        }
        console.log(`O ${this.tipo} Megumim atacou usando ${ataque}`);
    }
}
const heroi1 = new Heroi('Megumim', 22, 'mago');
heroi1.atacar();
