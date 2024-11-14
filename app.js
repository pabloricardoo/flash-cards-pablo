function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = ` 
                 <div class="cartao__conteudo">
                    <h3>${categoria}</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>${pergunta}</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>${resposta}</p>
                    </div>
                </div>`

    let respostataVisivel = false;

    function viraCartao() {
        respostataVisivel = !respostataVisivel;
        cartao.classList.toggle('active', respostataVisivel);
    }

    cartao.addEventListener('click', viraCartao);

    container.appendChild(cartao);
}