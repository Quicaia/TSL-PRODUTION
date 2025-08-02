
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

