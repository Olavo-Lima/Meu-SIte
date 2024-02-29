// função de css para rodar o ícone

const burguer = document.getElementById('burguer');

        burguer.addEventListener('click', () => {
            burguer.classList.add('rotated'); // Adiciona a classe "rotated" ao clicar
        });

        burguer.addEventListener('animationend', () => {
            burguer.classList.remove('rotated'); // Remove a classe "rotated" quando a animação termina
        });

// função que abre o menu

function clickMenu() {
    if  (itens.style.display == "block") {
        itens.style.display = "none"
    } else {
        itens.style.display = 'block'
    }
}