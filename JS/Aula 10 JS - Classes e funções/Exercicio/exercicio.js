//Data de hoje
date = new Date();
    dataArray = Array(3);
    dataArray[0] = date.getFullYear();
    dataArray[1] = date.getMonth() + 1;
    dataArray[2] = date.getDate();

idade = 0
niver = 0
i = 0

class pessoa{
    constructor(nome, dataNascimento){
        this.nome = nome; 
        this.dataNascimento = new Date(dataNascimento);
        this.idade = idade; 
    };
    getIdade(){ //Pegando a idade
        this.dNascArray = Array(3);
        this.dNascArray[0] = this.dataNascimento.getFullYear();
        this.dNascArray[1] = this.dataNascimento.getMonth() +1; 
        this.dNascArray[2] = this.dataNascimento.getDate(); 
        
        if (this.dNascArray[1] < dataArray[1]){ 
            idade = dataArray[0] - this.dNascArray[0]; //Idade
        }
        else if(this.dNascArray[1] == dataArray[1] && this.dNascArray[2] <= dataArray[2]){ 
            idade = dataArray[0] - this.dNascArray[0]; //Idade
        }
        else if(this.dNascArray[1] >= dataArray[1]){ 
            idade = dataArray[0] - this.dNascArray[0] -1; //Idade, -1 porque ela não fez ainda
        };
        return idade;
    };
    showConsole(){ 
        for(i; i < pessoas.length; i++){
            console.log(`${pessoas[i].nome} tem ${pessoas[i].getIdade()} anos e, ${pessoas[i].niver() ? 'fez aniversário' : 'ainda não fez aniversário'} esse ano.`)
        }
    }
};

//criando array de 10 espaços
pessoas = Array(10);

//inserindo as informações no array
pessoas[0] = new pessoa('Durval', '2009-06-19');
pessoas[1] = new pessoa('Samuel', '2000-01-10');
pessoas[2] = new pessoa('Alcantara', '2003-05-02');
pessoas[3] = new pessoa('Fernando', '2003-09-07');
pessoas[4] = new pessoa('Gabriela', '1994-07-24');
pessoas[5] = new pessoa('Amanda', '2010-03-14');
pessoas[6] = new pessoa('Roberto', '2001-10-09');
pessoas[7] = new pessoa('Carlos', '2000-07-03');
pessoas[8] = new pessoa('Ronaldo', '2000-06-01');
pessoas[9] = new pessoa('Fenomeno', '2003-06-02');



//Verificando se a pessoa fez aniversário ou vai fazer
pessoa.prototype.niver = function (){
    if (this.dNascArray[1] < dataArray[1]){
        niver = true
    }
    else if(this.dNascArray[1] == dataArray[1] && this.dNascArray[2] <= dataArray[2]){
        niver = true
    }
    else if(this.dNascArray[1] >= dataArray[1]){ 
        niver = false
    };
    return niver;
};

pessoas[0].showConsole()