$(document).ready(function() {
    
    
    /* For vores sticky navigatio. Her bruger jeg et jquery plugin kaldet waypoints. Waypoints er en nem måde til at trigge en funktion når vi scroller til en element.
     I tilfældet her anvender jeg en if-sætning og else-sætning. Hvis brugeren scroller ned, så vil classen "sticky" komme frem (Hvilket er nav) 
        og hvis brugeren scroller op, så fjernes classen "sticky". Offset er sat til 60px, hvilket gør at vores sticky nav kommer frem ved 60px før den rammer sektion "section-features" som vi havde
        defineret"  */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* Scroll på knapper. Her jeg ændrer mine to call to actions knapper på startsiden. Her anvender jeg .click(function () og animate({scrollTop:. Dette gør at når man trykker på min call-to-action knap "bestil bord"
        så scroller siden ned til "section-plans", hvor min reservation-formular ligger. Hastigheden i dette tilfælde er sat til "1000" hvilket svarer til et sekundt. Samme metode er anvendt til call-to.action
        knappen "takeaway". Her scroller den til sektionen features, hvor min takeaway-plan er beskrevet. */
    $('.js--scroll-to-reservation').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-takeaway').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    
    /* Navigation scroll. I dette tilfælde vælger funktionen et link element, hvor "ahref" starter med #. Når vi klikker på det og elementet eksisterer, så scroller vi op til sektionen 
    på et sekundt.     */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
 
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });
});




    
    /* Reservation formular med localstorage */


let orders = [];

const addOrder = (ev)=>{
    ev.preventDefault(); //stop knap fra at submit default ved normal browser session
    let order = {
        navn: document.getElementById('navn').value,
        email: document.getElementById('email').value,
        dato: document.getElementById('date-input').value,
        tidspunkt: document.getElementById('time-input').value,
        antal: document.getElementById('person-input').value
    }
    orders.push(order);
    document.forms[0].reset(); //Clear formen til næste input

    //Display i console

    console.warn('added' , {orders} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(orders, '\t', 5);

    //Gemmer til localStorage
    localStorage.setItem('orderList', JSON.stringify(orders) );
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn_1').addEventListener('click', addOrder);
});







 
    /* Tip formular. Til at starte med skal vi have fat i vores "btn" og det gør vi at bruge getElementById.("btn");. Herefter bruger vi en btn.addEventListener('click', function(){ med 
        click funktion. Derefter skal vi have værdien af "bill amount" og "tip-percentage" og dette gøres ved at bruge "et billAmount = document.getElementById('bill-amount').value;"  
        og  "let tipPercentage = document.getElementById('tip-percentage').value;". Herefter udregner vi "tip beløb" og det samlede beløb med tip. Dette gøres ved at lave en variabel og 
        sætte den til "tipamount og bruge "document.getElementById('tip-amount').value = billAmount / tipPercentage;". Herefter udregner jeg den samlede regning ved at bruge 
        document.getElementById('total-bill').value = parseFloat(billAmount) + parseFloat(tipAmount);.. Her bruges parsefloat, så den ser værdien som et tal og ikke en string.        */


let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let billAmount = document.getElementById('bill-amount').value;
    let tipPercentage = document.getElementById('tip-percentage').value;

    
    let tipAmount = document.getElementById('tip-amount').value = billAmount / tipPercentage;
    document.getElementById('total-bill').value = parseFloat(billAmount) + parseFloat(tipAmount);

})




   /* Rating med emoji (Mine emojies er hentet under emoticons fra w3schools.). Vi starter med at lave en variabel kaldet "box" som vi kan tilgå via const box = document.getElementById("box");
    Herefter laver vi en varibal kaldet "text" som vi kan tilgå via const text = document.getElementById("text");  */



const box = document.getElementById("box");
const text = document.getElementById("text");
t = text.innerHTML;
const emoji = document.getElementById("emoji");
var e = document.getElementById("face");

box.addEventListener("focusin", function(){
  text.innerHTML = "Indtast et number fra 1 - 5";
});

box.addEventListener("focusout", function(){
  text.innerHTML = t;
  emoji.innerHTML = "";
})

box.addEventListener("keydown", function (event){
  text.innerHTML = "";
  switch(event.code){
    case "Digit1":
      emoji.innerHTML = '&#128545;';
      break;
    case "Digit2":
      emoji.innerHTML = '&#128577;';
      break;
    case "Digit3":
      emoji.innerHTML = '&#128528;';
      break;
    case "Digit4":
      emoji.innerHTML = '&#128578;';
      break;
    case "Digit5":
      emoji.innerHTML = '&#128513;';
      break;
  }
});





