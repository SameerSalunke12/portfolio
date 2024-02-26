
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    if (header.style.display === "none") {
        header.style.display = "initial";
        

    }
    else {
        header.style.display = "none";
    }
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
   
}
