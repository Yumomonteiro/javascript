//for
//while
//do while
//for in

const pessoa = {
    nome:'Yuri',
    idade: 25
}

for(let chave in pessoa) {
    console.log (chave, pessoa['nome'])
}

const cores = ['vermelho' , 'Azul', 'verde']

for(let indice in cores) {
    console.log(indice,cores[indice])
}


//for-off

for (let cor)