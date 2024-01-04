
nome = "O Herói tem o saldo de vitórias de "
vitorias = 150
derrotas = 50

//função de saldo do de Vitórias do Heroi
function nivelDeHeroi(vitorias, derrotas){

    let saldo = vitorias - derrotas
    

    if (saldo < 10){ 
        console.log((nome) + (saldo) + (" está no nível de Ferro"))
    }else if(saldo >= 11 && saldo <= 20 ){
        console.log((nome) + (saldo) + (" está no nível de Bronze" ))
    }else if(saldo >=21 && saldo<= 50){
        console.log((nome) + (saldo) + (" está no nível de Prata"))
    }else if(saldo >= 51 && saldo <= 80){ 
        console.log ((nome) + (saldo) + (" está no nível de Ouro"))
    }else if(saldo >= 81 && saldo <= 90){
        console.log((nome) +(saldo) + (" está no nível de Diamante"))
    }else if (saldo >= 91 && saldo <= 100){
        console.log((nome) + (saldo)+ (" está no nível de Lendário"))
    }else if (saldo >= 101){
        console.log((nome) + (saldo) + (" está no nível de Imortal"))
    }
    return saldo
}

//Chamando a função 
nivelDeHeroi(vitorias,derrotas)






