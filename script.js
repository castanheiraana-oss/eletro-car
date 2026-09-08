// Função para simular a mudança de cor trocando a imagem
function mudarCor(modelo, urlImagem) {
    const imagemElemento = document.getElementById(`img-${modelo}`);
    if (imagemElemento) {
        imagemElemento.style.opacity = '0.3';
        setTimeout(() => {
            imagemElemento.src = urlImagem;
            imagemElemento.style.opacity = '1';
        }, 200);
    }
}

// Função para simular compra do carro
function comprarCarro(nomeModelo) {
    alert(`Obrigado pelo interesse no ${nomeModelo}! Redirecionando para o formulário de reserva...`);
}

// Função para abrir o contato no WhatsApp da Proprietária
function entrarEmContato() {
    const numeroTelefone = "5511987654321";
    const mensagem = encodeURIComponent("Olá Ana Clara, vim pelo site da EletroCar e gostaria de mais informações sobre os veículos!");
    window.open(`https://wa.me/${numeroTelefone}?text=${mensagem}`, '_blank');
}
