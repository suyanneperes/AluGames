function alterarStatus (id) {
    let gameClicado = document.getElementById(`game-${id}`); //chamei, de dentro do documento, um elemento pelo id, mas coloquei uma função neste `game-n`, pois no index o elemento <li> é exclusivo para cada game. 
    let imagem = gameClicado.querySelector('.dashboard__item__img') // para chamar uma classe é necessário colocar um ponto (.) antes, como "dashboard__items__item" é uma classe, dentro do querySelector tenho que colocar um ponto antes.
    let botao = gameClicado.querySelector('.dashboard__item__button'); // aqui estou chamando a classe do botão
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name'); // aqui estou chamando a classe dos nomes

    //De alguma maneira, o que eu fiz aqui em cima faz com que ao clicar nos botões eles interajam de acordo com o que foi clicado, por exemplo, se no site eu clico em Monopoly, ele reagirá de acordo com o que eu colocar aqui, como é o caso do alert abaixo que mostra o nome do jogo certinho.
    //alert (nomeJogo.textContent);

    if (imagem.classList.contains('dashboard__item__img--rented')) // aqui eu disse que se dentro da lista de classes dela eu devo procurar se ela contém ('dashboard__item__img--rented'), caso ela contenha, a afirmação é verdadeira.
        { 
            if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
        imagem.classList.remove('dashboard__item__img--rented'); //mandei que caso a condição acima fo verdadeira a classe "dashboard__item__img--rented" deve ser removida.
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
            }
    }
    else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
        //CÓDIGO QUE TAMBÉM FUNCIONOU
    //if (botao.classList.contains('dashboard__item__button--return')) {
       // botao.classList.remove('dashboard__item__button--return');
        //botao.innerText = "Alugar";  // Muda o texto para "Alugar"
   // } else {
       // botao.classList.add('dashboard__item__button--return');
       // botao.innerText = "Devolver";  // Muda o texto para "Devolver"
    //}
}