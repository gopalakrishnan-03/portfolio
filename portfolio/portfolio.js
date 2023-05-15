
const menu = document.querySelector('.menu');
const header = document.querySelector('header');

menu.addEventListener('click',()=>{
   
    header.classList.toggle('toggle');
   
});



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec =>{

        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      };
    });

        menu.classList.remove('active');
        header.classList.remove('toggle');
};

ScrollReveal({
    reset:true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-contant,.skill-contant',{origin:'top'});

ScrollReveal().reveal('.h1');



// var  about = document.getElementById('.about-heading');
// var  personal = document.getElementById('.personal-body');
// var  education = document.getElementById('.education-body');

//     function education(){
//         personal.style.left = "-50%";
//         education.style.left = "50px";
//         about.style.left = "110px";
//     };



