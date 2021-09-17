document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

/*Otra opción 
let x = 0;
document.getElementById("hamburguer").addEventListener('click', () => {

    if (x == 0){
        x=1;
        document.querySelector('.nav-menu').classList.add("show");
    } else{
        x=0;
        document.querySelector('.nav-menu').classList.remove("show");
    }
        
}

*/

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards' , { delay:500});
ScrollReveal().reveal('.cards-banner-one' , { delay:500});
ScrollReveal().reveal('.cards-banner-two' , { delay:500});



