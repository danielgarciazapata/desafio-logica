class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase(); // padroniza o tipo para letras minúsculas
  }

  atacar() {
    let ataque = "";

    // Estrutura de decisão para definir o ataque com base no tipo
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    // Exibe a mensagem final
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}


const heroi1 = new heroi("João", 20, "guerreiro");
const heroi2 = new heroi("Felipe", 40, "mago");
const heroi3 = new heroi("José", 55, "monge");
const heroi4 = new heroi("Leonardo", 34, "ninja");


heroi1.atacar();
heroi2.atacar();  
heroi3.atacar();  
heroi4.atacar();  

   