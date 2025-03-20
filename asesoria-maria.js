document.addEventListener("DOMContentLoaded", function () {
    // Captura todos os links "Saiba mais"
    const saibaMaisLinks = document.querySelectorAll('.saiba-mais');

    // Adiciona um evento de clique para cada um
    saibaMaisLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Previne o comportamento padrão do link
            const maisInfo = this.nextElementSibling;  // Pega o conteúdo extra abaixo do link

            // Alterna a exibição do conteúdo
            if (maisInfo.style.display === 'none' || maisInfo.style.display === '') {
                maisInfo.style.display = 'block';  // Exibe o conteúdo
                this.textContent = 'Mostrar menos';  // Muda o texto do link
            } else {
                maisInfo.style.display = 'none';  // Esconde o conteúdo
                this.textContent = 'Mostrar más';  // Restaura o texto do link
            }
        });
    });
});



// Função para monitorar o scroll da página e fazer as imagens desaparecerem
window.addEventListener('scroll', function() {
    var imagem1 = document.getElementById('imagem-fixada');
    var imagem2 = document.getElementById('imagem-fixada-2');
    var imagem3 = document.getElementById('imagem-fixada-3');

    // Verificando a posição do scroll
    if (window.scrollY > 100) { // Quando rolar mais de 100px
        imagem1.style.opacity = 0; // Torna a imagem invisível
        imagem2.style.opacity = 0; // Torna a imagem invisível
        imagem3.style.opacity = 0; // Torna a imagem invisível
    } else {
        imagem1.style.opacity = 1; // Torna a imagem visível
        imagem2.style.opacity = 1; // Torna a imagem visível
        imagem3.style.opacity = 1; // Torna a imagem visível
    }
});



window.addEventListener('DOMContentLoaded', (event) => {
    // Obtém a URL atual da página
    const currentPage = window.location.pathname.split('/').pop();
    
    // Seleciona todos os links do menu
    const menuLinks = document.querySelectorAll('.nav-links a');

    // Percorre todos os links e verifica se o href do link é igual à página atual
    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');  // Adiciona a classe 'active' ao link correspondente
        }
    });
});






let offsetPrimeira = 0; // Para a primeira imagem
let offsetSegunda = 0;  // Para a segunda imagem
let offsetTerceira = 0; // Para a terceira imagem
let offsetQuarta = 0;   // Para a quarta imagem
let offsetQuinta = 0;   // Para a quinta imagem
let offsetSexta = 0;    // Para a sexta imagem
let offsetSetima = 0;   // Para a sétima imagem

// Funções de rolagem para cada imagem
function rolarImagemDireita(imagem) {
    const imagemElement = document.querySelector(`.${imagem}-imagem`);
    
    // Atualizando o deslocamento com base na imagem selecionada
    let offset = getOffset(imagem);
    if (offset < 50) {
        offset += 10;
        imagemElement.style.transform = `translateX(-${offset}%)`;
        setOffset(imagem, offset);
    }
}

function rolarImagemEsquerda(imagem) {
    const imagemElement = document.querySelector(`.${imagem}-imagem`);
    
    let offset = getOffset(imagem);
    if (offset > 0) {
        offset -= 10;
        imagemElement.style.transform = `translateX(-${offset}%)`;
        setOffset(imagem, offset);
    }
}

// Função para obter o offset
function getOffset(imagem) {
    if (imagem === 'primeira') return offsetPrimeira;
    if (imagem === 'segunda') return offsetSegunda;
    if (imagem === 'terceira') return offsetTerceira;
    if (imagem === 'quarta') return offsetQuarta;
    if (imagem === 'quinta') return offsetQuinta;
    if (imagem === 'sexta') return offsetSexta;
    if (imagem === 'setima') return offsetSetima;
}

// Função para definir o offset
function setOffset(imagem, offset) {
    if (imagem === 'primeira') offsetPrimeira = offset;
    if (imagem === 'segunda') offsetSegunda = offset;
    if (imagem === 'terceira') offsetTerceira = offset;
    if (imagem === 'quarta') offsetQuarta = offset;
    if (imagem === 'quinta') offsetQuinta = offset;
    if (imagem === 'sexta') offsetSexta = offset;
    if (imagem === 'setima') offsetSetima = offset;
}








function toggleAnswer(index) {
    var answer = document.getElementById("answer" + index);
    var expandBtn = document.querySelectorAll(".expand-btn")[index];
    var collapseBtn = document.querySelectorAll(".collapse-btn")[index];

    if (answer.style.display === "none" || answer.style.display === "") {
        // Exibe a resposta e muda os botões
        answer.style.display = "block";
        expandBtn.style.display = "none";
        collapseBtn.style.display = "inline-block";
    } else {
        // Esconde a resposta e volta ao estado inicial
        answer.style.display = "none";
        expandBtn.style.display = "inline-block";
        collapseBtn.style.display = "none";
    }
}

