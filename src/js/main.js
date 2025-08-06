
//========================Open Menu Mobile ======================//

const menuBtn = document.getElementById("menu-btn")
const menuMobile = document.getElementById("nav-links")
const menuBtnIcon = document.querySelector("i")

menuBtn.addEventListener('click', (e)=> {
       menuMobile.classList.toggle("open")
    
       //alterar o icon men
      const isOpen = menuMobile.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

menuMobile.addEventListener("click", (e) => {
    menuMobile.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})

//**===============Open Roteiro============= */

  // Espera o DOM estar carregado

  document.addEventListener('DOMContentLoaded', function () {
    const btnIconRoteiro = document.querySelectorAll('.btn-roteiro');

    btnIconRoteiro.forEach(botao => {

      botao.addEventListener('click', () => {
        const item = botao.closest('.roteiro-item');
        const explica = item.querySelector('.roteiro-explica');
        const icone = botao.querySelector('i');

        explica.classList.toggle('open');

        //mudar o icone
        if (explica.classList.contains('open')) {
                icone.classList.remove('ri-add-circle-line');
                icone.classList.add('ri-indeterminate-circle-line');
        } else {
                icone.classList.remove('ri-indeterminate-circle-line');
                icone.classList.add('ri-add-circle-line');
        }
      });

    });
  });

