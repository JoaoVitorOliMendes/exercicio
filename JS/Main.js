var imglogo = document.getElementsByClassName("span1");
var seta = document.getElementsByClassName("seta");
var setaa = document.getElementsByClassName("setaa");
var a = document.getElementsByClassName("a");
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");

slideIndex = 1;
 
showSlides(slideIndex);
function plusSlides(n) {
      showSlides(slideIndex += n);
    }

function currentSlide(n) {
      showSlides(slideIndex = n);
    }
function showSlides(n) {
      i = 0;
      
      console.log(slides.length)
      console.log(dots.length)

      if (n > slides.length)
      {
        slideIndex = 1
      }    
      if (n < 1)
      {
        slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" ativo", "");
      }
      slides[slideIndex-1].style.display = "flex"; 
      slides[slideIndex-1].style.opacity = 1; 
      dots[slideIndex-1].className += " ativo";
    }

    window.addEventListener("scroll", function()
{
    var scroll = Math.ceil(window.scrollY);
    scroll = scroll / ($(document).height() - $(window).height());
    scroll = scroll.toFixed(2);
    console.log(scroll);

    if(scroll != 0)
    {
        imglogo[0].setAttribute("src", "IMG/png/mini-logo.png");

        if(scroll<0.33)
        {
            setaa[0].setAttribute("href", "#projetos");
            console.log("home");
            seta[0].setAttribute("style", "display:flex");
            a[0].setAttribute("id", "a")
            a[1].setAttribute("id", "a")
            a[2].setAttribute("id", "a")
        }
        if(scroll>=0.33 && scroll<0.66)
        {
            setaa[0].setAttribute("href", "#sobre");
            seta[0].setAttribute("style", "display:flex");
            a[0].setAttribute("id", "ativo")
            a[1].setAttribute("id", "a")
            a[2].setAttribute("id", "a")
            console.log("projetos");
        }else if(scroll>=0.66 && scroll<0.95)
        {
            setaa[0].setAttribute("href", "#contatos");
            seta[0].setAttribute("style", "display:flex");
            a[1].setAttribute("id", "ativo");
            a[0].setAttribute("id", "a")
            a[2].setAttribute("id", "a")
            console.log("sobre");
        }else if(scroll>=0.99)
        {
            seta[0].setAttribute("style", "display:none");
            a[2].setAttribute("id", "ativo");
            a[0].setAttribute("id", "a")
            a[1].setAttribute("id", "a")
            console.log("contatos");
            imglogo[0].setAttribute("src", "IMG/png/logo.png")
        }
    }
    else
    {
        imglogo[0].setAttribute("src", "IMG/png/logo.png");
    }
})