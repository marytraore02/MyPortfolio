
(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 30
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    

    // Typed Initiate
    // if ($('.header h2').length == 1) {
    //     var typed_strings = $('.header .typed-text').text();
    //     var typed = new Typed('.header h2', {
    //         strings: typed_strings.split(', '),
    //         typeSpeed: 100,
    //         backSpeed: 20,
    //         smartBackspace: false,
    //         loop: true
    //     });
    // }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Porfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Review slider
    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);


///////////////////////////////////Fonction pour email debut////////////////////////////////

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      objet: document.getElementById("objet").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_xhalsre";
    const templateID = "template_40qjhp9";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("objet").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Message envoyer avec succes!!")
  
      })
      .catch(err=>console.log(err));
  
  }


  
///////////////////////////////////Fonction pour email fin ////////////////////////////////






///////////////////////////////////formulaire contrainte debut////////////////////////////////

//La recuperation des elements
// const form = document.querySelector('#form');
// const username = document.querySelector('#name');
// const email = document.querySelector('#email');

// //evenements
// form.addEventListener('submit',e=>{
//     //Empêcher le traitement ce faire pour verifier les contraintes
//     e.preventDefault();

//     form_verify();
// })

// //Fonction
// function form_verify(){
//     //Obtenu toute les valeur des inputs en coupants les espaces a gauches et a droite
//     const nameValue = username.value.trim();
//     const emailValue = email.value.trim();

//     //Verification du nom d'utilisateur
//     if(nameValue === ""){
//         let message = "Veuillez donnez un nom";
//         setError(username,message);
//     }else if(!nameValue.match(/^[a-zA-Z]/)){
//         let message = "Le nom doit commencer par une lettre";
//         setError(username,message)
//     }else{
//         let letterNum = nameValue.length;
//         if(letterNum < 3){
//             let message = "Le nom doit avoir au moins 3 caractères";
//             setError(username,message);
//         } else {
//             setSuccess(username);
//         }
//     }

//     //email verfication
//     if(emailValue === ""){
//         let message = "Veuillez renseignez un email";
//         setError(email,message);
//     }else if(!email_verify(emailValue)){
//         let message = "Email non valide!";
//         setError(email,message);
//     }else{
//         setSuccess(email);
//     }
// }

// function setError(elem,message){
//     const formControl = elem.parentElement;
//     const small = formControl.querySelector('small');

//     //Ajout du message d'erreur
//     small.innerText = message

//     //Ajout de la classe error
//     formControl.className = "form-group error";
// }

// //Fonction appeler lorsque le champ est valide
// function setSuccess(elem){
//     const formControl = elem.parentElement;
//     formControl.className = "form-group success";
// }


// //Function pour verifier l'adresse email
// function email_verify(email){
//     /* Expresdsion pour verifier l'adresse email
//     * mary_traore.22-t@gmail.com
//         /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
//     */
//     return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
// }


///////////////////////////////////formulaire contrainte fin////////////////////////////////
//La recuperation des elements
