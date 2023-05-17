
/***********MenuBar*********/ 

const menu = document.querySelector('.menu');
const header = document.querySelector('header');

menu.addEventListener('click',()=>{
   header.classList.toggle('toggle');

});

/***********ScrollBar*********/ 

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


/***********About Section*********/ 

let tabs = document.querySelectorAll('.about-head');
  let contants = document.querySelectorAll('.about-contant');

    
      tabs.forEach((tab,index)=>{
        tab.addEventListener('click',()=>{
          contants.forEach((content)=>{
            content.classList.remove('is-active');
          });
            tabs.forEach((tab)=>{
            tab.classList.remove('is-active');
          });
          contants[index].classList.add('is-active');
          tabs[index].classList.add('is-active');

        });
      });
       


/***********Screen Reveal*********/ 

window.addEventListener('scroll', () => {

    var reveals = document.querySelectorAll('.reveal');

      for (i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
    
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        } 
        else {
          reveals[i].classList.remove('active');
        };
     };
  });
  
  

  



