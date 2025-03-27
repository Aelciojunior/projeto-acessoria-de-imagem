// script.js
function mostrarTexto(id) {
    var texto = document.getElementById(id);
    
    // Verifica se o texto está visível ou não
    if (texto.style.display === "none") {
        texto.style.display = "block";  // Mostra o texto
    } else {
        texto.style.display = "none";  // Esconde o texto
    }
}

document.getElementById('submitBtn').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    
    // Verifica se ambos campos estão preenchidos
    if (nombre && email) {
        // Exibe a mensagem de sucesso
        document.getElementById('mensaje-exito').style.display = 'block';
        
        // Limpa os campos do formulário após o envio
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
    } else {
        alert("Por favor, complete ambos campos.");
    }
});

















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



