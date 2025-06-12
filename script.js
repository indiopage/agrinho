// script.js

// Este evento garante que o script só execute após todo o HTML ser carregado
document.addEventListener('DOMContentLoaded', () => {
    console.log('O script.js foi carregado com sucesso para o site "História do Porco no Paraná"!');

    // Exemplo de uma funcionalidade futura que você pode adicionar:
    // Um botão "Voltar ao Topo" que aparece ao rolar a página
    /*
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑ Voltar ao Topo';
    backToTopButton.id = 'back-to-top';
    document.body.appendChild(backToTopButton);

    backToTopButton.style.cssText = `
        display: none;
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        z-index: 1000;
    `;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Mostra o botão após rolar 300px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rola suavemente para o topo
        });
    });
    */
});