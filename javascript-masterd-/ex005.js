var novoArray = ['Carro','mota','barco'];
console.log('array original' + novoArray);
novoArray.push('comboio');
novoArray.unshift('bicicleta');
console.log('array com mais de dois elementos' + novoArray);
novoArray.splice(novoArray.indexOf('mota'), 1);
novoArray.forEach(function(elemento, indice, array) {
    console.log(elemento, indice)
})