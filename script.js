// Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle("fa-xmark")
})

// Typing Effect

let typed1 = new Typed ('.auto-input1',{
    strings: [ 'Your Analyst', ' Your System Designer', 'And Your Future Bachelor Of Science In Information System', ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 3000,
    loop: true,
  });
  
  let typed2 = new Typed ('.auto-input2',{
    strings: [ ' "The best way to predict the future is to invent it" ' ],
    typeSpeed: 50,
    backSpeed: 125,
    backDelay: 20000,
    loop: true,
  });


  let typed3 = new Typed ('.auto-input3',{
    strings: [ 'About', 'About Me'],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 500,
    loop: true,
  });

  
  let typed4 = new Typed ('.auto-input4',{
    strings: [ 'Skill', 'Skills'],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 500,
    loop: true,
  });


  let typed5 = new Typed ('.auto-input5',{
    strings: [ 'Contacts', 'Contact Me'],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 500,
    loop: true,
  });



// Active link State On scroll 

// Get all links 
let navLinks = document.querySelectorAll('nav ul li a')
// Get all Sections
let Sections = document.querySelectorAll('section')

window.addEventListener('scroll', function (){
const scrollPos = this.window.scrollY
   Sections.forEach(Section =>{
     if(scrollPos > Section.offsetTop && scrollPos < ( Section.offsetTop + Section.offsetHeight)){
      navLinks.forEach(link => {
         link.classList.remove('active');
              if(Section.getAttribute('id') === link.getAttribute(href).substring(1)) {

               }
          });

       }
    });
});




    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var msg = document.getElementById("msg").value;
        var subject = "Message from " + name;
        var mailtoLink = "mailto:davesonvasquez@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(msg);
        
        window.location.href = mailtoLink;
    });




















