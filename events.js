"use strict";
window.addEventListener("load", function () {
  var about = document.querySelector("#perfil_description");
  var img_perfil = document.querySelector("#perfil");
  //se crea una funcion para que cuando se cargue la pagina se
  //muestren elmcontenido de main> about
  var css = document.querySelector(".css");
  var responsive = document.querySelector(".responsive");
  var figma = document.querySelector(".figma");
  const ancho = parseInt(window.pageXOffset);
  const img_udemy = document.querySelector("#udemy");
  const img_camp = document.querySelector("#responsive");
  const img_figma = document.querySelector("#figma");
  var type_blog = document.querySelector(".one");
  var contact = document.querySelector(".two");
  var three = document.querySelector(".three");
  const img_type_blog = document.querySelector("#blog");
  const img_contact = document.querySelector("#contact");
  const img_three = document.querySelector("#three");
  //Animacion de flechas deslizar / about-certificaciones
  var des_one = document.querySelector(".des_one");
  var des_two = document.querySelector(".des_two");
  var des_three = document.querySelector(".des_three");
  des_one.style.animation = "flecha 1s infinite";
  des_two.style.animation = "flecha 1.1s infinite";
  des_three.style.animation = "flecha 1.2s infinite";
  //Animacion de flechas deslizar / certificaciones-proyectos
  var des_four = document.querySelector(".des_four");
  var des_five = document.querySelector(".des_five");
  var des_six = document.querySelector(".des_six");
  des_four.style.animation = "flecha 1s infinite";
  des_five.style.animation = "flecha 1.1s infinite";
  des_six.style.animation = "flecha 1.2s infinite";

  //Efectos de agrandamiento secciones Certificacion y Proyectos
  if ((ancho) => 900) {
    css.addEventListener("mouseover", function () {
      img_udemy.style.animation = "img_hover 1s forwards";
    });
    css.addEventListener("mouseout", function () {
      img_udemy.style.animation = "img_out 1s forwards";
    });
    //Responsive
    responsive.addEventListener("mouseover", function () {
      img_camp.style.animation = "img_hover 1s forwards";
    });
    responsive.addEventListener("mouseout", function () {
      img_camp.style.animation = "img_out 1s forwards";
    });
    //figma
    figma.addEventListener("mouseover", function () {
      img_figma.style.animation = "img_hover 1s forwards";
    });
    figma.addEventListener("mouseout", function () {
      img_figma.style.animation = "img_out 1s forwards";
    });
    //Blog
    type_blog.addEventListener("mouseover", function () {
      img_type_blog.style.animation = "img_hover 1s forwards";
    });
    type_blog.addEventListener("mouseout", function () {
      img_type_blog.style.animation = "img_out 1s forwards";
    });
    //contact
    contact.addEventListener("mouseover", function () {
      img_contact.style.animation = "img_hover 1s forwards";
    });
    contact.addEventListener("mouseout", function () {
      img_contact.style.animation = "img_out 1s forwards";
    });
    //three
    three.addEventListener("mouseover", function () {
      img_three.style.animation = "img_hover 1s forwards";
    });
    three.addEventListener("mouseout", function () {
      img_three.style.animation = "img_out 1s forwards";
    });
  }

  window.addEventListener("scroll", function () {
    //ubicar el min del punto de corte (matchMedia)
    //animation of img
    about.style.animation = "animation_about 1.5s forwards";
    img_perfil.style.animation = "animation_img 1.5s forwards";
  });

  //Animacion de difuminado conforme de desplaza
  window.addEventListener("scroll", function () {
    if (
      window.matchMedia("(min-width:100px)").matches &&
      window.matchMedia("(max-width:1800px)").matches
    ) {
      const altura = parseInt(window.pageYOffset);
      console.log(altura);

      var certification_log_wrap = document.querySelector(
        "#certification_log_wrap"
      );
      window.addEventListener("scroll", function () {
        if (altura >= 500) {
          certification_log_wrap.style.animation = "down_up 1s forwards";
        }
      });

      if (altura >= 250 && altura <= 300) {
        css.style.opacity = "0.25";
        responsive.style.opacity = "0.25";
        figma.style.opacity = "0.25";
      } else if (altura >= 301 && altura <= 330) {
        css.style.opacity = "0.5";
        responsive.style.opacity = "0.5";
        figma.style.opacity = "0.5";
      } else if (altura >= 351 && altura <= 400) {
        css.style.opacity = "0.75";
        responsive.style.opacity = "0.75";
        figma.style.opacity = "0.75";
      } else if (altura >= 401 && altura <= 875) {
        css.style.opacity = "1";
        responsive.style.opacity = "1";
        figma.style.opacity = "1";
      }
      //Pendiente revisar porque no cambia opacidad
      //Desaparicion deslizar arriba => abajo
      else if (altura <= 875) {
        css.style.opacity = "1";
        responsive.style.opacity = "1";
        figma.style.opacity = "1";
      } else if (altura >= 876 && altura <= 976) {
        css.style.opacity = "0.75";
        responsive.style.opacity = "0.75";
        figma.style.opacity = "0.75";
      } else if (altura >= 1043 && altura <= 1110) {
        css.style.opacity = "0.5";
        responsive.style.opacity = "0.5";
        figma.style.opacity = "0.5";
      } else if (altura >= 1111 && altura <= 2000) {
        css.style.opacity = "0.25";
        responsive.style.opacity = "0.25";
        figma.style.opacity = "0.25";
      }
      //Aparicion de abajo hacia arriba
      if (altura >= 1111 && altura <= 2000) {
        css.style.opacity = "0.25";
        responsive.style.opacity = "0.25";
        figma.style.opacity = "0.25";
      } else if (altura >= 1043 && altura <= 1110) {
        css.style.opacity = "0.5";
        responsive.style.opacity = "0.5";
        figma.style.opacity = "0.5";
      } else if (altura >= 876 && altura <= 976) {
        css.style.opacity = "0.75";
        responsive.style.opacity = "0.75";
        figma.style.opacity = "0.75";
      } else if (altura <= 875) {
        css.style.opacity = "1";
        responsive.style.opacity = "1";
        figma.style.opacity = "1";
      }

      var projects_wrap = document.querySelector("#projects_wrap");
      window.addEventListener("scroll", function () {
        if (altura >= 1100) {
          projects_wrap.style.animation = "down_up 1s forwards";
        }
      });

      if (altura >= 910 && altura <= 940) {
        type_blog.style.opacity = "0.25";
        contact.style.opacity = "0.25";
        three.style.opacity = "0.25";
      } else if (altura >= 941 && altura <= 976) {
        type_blog.style.opacity = "0.5";
        contact.style.opacity = "0.5";
        three.style.opacity = "0.5";
      } else if (altura >= 942 && altura <= 1043) {
        type_blog.style.opacity = "0.75";
        contact.style.opacity = "0.75";
        three.style.opacity = "0.75";
      } else if (altura >= 1044 && altura <= 1343) {
        type_blog.style.opacity = "1";
        contact.style.opacity = "1";
        three.style.opacity = "1";
      }
    }
  });
});
