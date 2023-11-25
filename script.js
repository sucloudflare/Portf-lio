// Função para revelar elementos ao rolar a página
function reveal() {
  // Seleciona todos os elementos com a classe "reveal"
  var reveals = document.querySelectorAll(".reveal");

  // Itera sobre os elementos
  for (var i = 0; i < reveals.length; i++) {
    // Obtém a altura da janela do navegador
    var windowHeight = window.innerHeight;
    // Obtém a posição do elemento em relação à janela
    var elementTop = reveals[i].getBoundingClientRect().top;
    // Define a quantidade de visibilidade necessária para ativar a classe "active"
    var elementVisible = 150;

    // Utiliza operador ternário para expressão condicional concisa
    // Adiciona ou remove a classe "active" com base na visibilidade do elemento
    reveals[i].classList.toggle("active", elementTop < windowHeight - elementVisible);
  }
}

// Adiciona um ouvinte de evento de rolagem para acionar a função reveal
window.addEventListener("scroll", reveal);

// Evento de clique na seta para rolar para baixo
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o elemento com a classe "arrow"
  const arrow = document.querySelector(".arrow");

  // Adiciona um ouvinte de evento de clique para rolar suavemente para baixo
  arrow.addEventListener("click", () => {
    // Utiliza window.scrollTo() para rolar suavemente até a altura da janela
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  });
});

// Script para o botão de voltar ao topo
$(document).ready(function () {
  // Seleciona o elemento com o ID "button"
  var btn = $("#button");

  // Adiciona um ouvinte de evento de rolagem para mostrar ou ocultar o botão com base na posição da página
  $(window).scroll(function () {
    // Simplifica a condição usando scrollTop() do jQuery
    btn.toggleClass("show", $(this).scrollTop() > 300);
  });

  // Adiciona um ouvinte de evento de clique para rolar suavemente até o topo
  btn.on("click", function (e) {
    e.preventDefault();
    // Utiliza window.scrollTo() para rolar suavemente até o topo da página
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// Links para direcionar para conteúdo específico por seção
document.addEventListener("DOMContentLoaded", function() {
  // Seleciona todos os itens de navegação dentro do elemento com classe "__container" e atributo "data-section"
  const navItems = document.querySelectorAll(".__container [data-section]");

  // Adiciona um ouvinte de evento de clique a cada item de navegação
  navItems.forEach(function(item) {
    item.addEventListener("click", function() {
      // Obtém o ID da seção alvo do atributo "data-section"
      const targetId = this.getAttribute("data-section");
      // Obtém o elemento da seção alvo pelo ID
      const targetSection = document.getElementById(targetId);
      
      // Verifica se a seção alvo existe
      if (targetSection) {
        // Utiliza window.scrollTo() para rolar suavemente até a seção alvo
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
});

