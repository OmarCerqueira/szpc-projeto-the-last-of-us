/*  
    OBEJTIVO - Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    passo 1 - Dar um jeito de pegar o elemento HTML dos botões

    passo 2 - Dar um jeito de identificar o clique do usuário no botão

    passo 3 - Desmarcar o botão selecionado anteriormente

    passo 4 - Marcar o botão clicado como se estivesse selecionado

    passo 5 - Esconder a imagem ativa de fundo anterior 

    passo 6 - Fazer aparecer a imagem de fundo correspondente ao botão clicado

*/



const botoesCarrossel = document.querySelectorAll('.botao');


botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();
        
        marcarBotaoSelecionado(botao);
        
        esconderImagemDeFundo();

        mostrarImagemDeFundo(indice);

    })
})


function mostrarImagemDeFundo(indice) {
    const imagens = document.querySelectorAll('.imagem');
    imagens[indice].classList.add('ativa');
}

function esconderImagemDeFundo() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionadoAnteriormente = document.querySelector('.selecionado');
    botaoSelecionadoAnteriormente.classList.remove('selecionado');
}

