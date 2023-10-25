var swiper = new Swiper(".Home", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
     
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });  
    let menu =document.querySelector('#menu-icon') ;
    let navbar =document.querySelector('.navbar') ;

    menubar.onclick=()=>{
      menu.classlist.toggle('bx-x');
      nav.classlist.toggle('active');
    } 
    window.onscroll=() =>{
      menu.classList.remove('bx-x') ;
      navbar.classList.remove('active')
    }