const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// Remove menu mobile

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n=>n.addEventListener('click',linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrolly = window.pageXOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', scrollActive)

function scrollHeader(){
    const header = document.getElementById('header')
    if (this.scrolly >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

}

window.addEventListener('scroll',scrollHeader)


// scroll top


// function scrollTop(){
//     const scrollTop = document.getElementById('scroll-top')
//     if (this.scrolly >= 560) scrollTop.classList.add('show-scroll'); else screenTop.classList.remove('show-scroll')

// }

// window.addEventListener('scroll',scrollTop)


mybutton = document.getElementById("myBtn")

window.onscroll =function(){
  scrollFunction()
};
function scrollFunction(){
  if(document.body.scrollTop > 560 || document.documentElement.scrollTop > 560){
    mybutton.style.display ="block";
  }else{
    mybutton.style.display = "none"
  }
}
function topfunction(){
  document.body.scrollTop = 0; //for safari
  document.documentElement.scrollTop =0; //for chrome , Firefox etc
}






// mixer section
const mixer = mixitup( ".portfolio__container", {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});


const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l=> l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l=> l.addEventListener('click', activePortfolio))


// const swiper = new Swiper('.swiper-container', {
   
//     spaceBetween: 16,
//     loop: true,
//     grabCursor: true,
  

//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
  

//   });

gsap.from('.home__img',{opacity:0, duration:2, delay:.5, x:60})
gsap.from('.home__data',{opacity:0, duration:2, delay:.8, y:25})
gsap.from('.home__name, .home__profession, .home__button',{opacity:0, duration:2, delay:1, y:25, ease:'expo.out', stagger:.2})

gsap.from('.nav__logo, .nav__toggle ',{opacity:0, duration:2, delay:1.5, y:25, ease:'expo.out', stagger:.2})
gsap.from('.nav__item ',{opacity:0, duration:2, delay:1.2, y:25, ease:'expo.out', stagger:.2})
gsap.from('.home__social-icon',{opacity:0, duration:2, delay:2.2, y:25, ease:'expo.out', stagger:.2})