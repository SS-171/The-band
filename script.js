var $= document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
const ticketForm = $('.ticket-form');
const rightClose = $('.form-close-right');
const botClose = $('.ticket-form-close-bot');
const buyTicket = $$('.js-buy-ticket');
let a =0;
function ticketHandle() {
    buyTicket.forEach(function(button) {
        button.onclick =function() {
            ticketForm.style.display = "flex";
        }
    });
    botClose.onclick = function() {
        ticketForm.style.display = "none";
    }
    rightClose.onclick = function() {
        ticketForm.style.display = "none";
    }
    document.onclick =function(event) {
        if(!event.target.closest('.ticket-form-wrap') && !event.target.matches('.js-buy-ticket'))
        {
            ticketForm.style.display = "none";
            
        }
            
        }         
    }   

ticketHandle();

const menuItem = document.querySelectorAll('#res-nav .res-nav__item a:not(.home)');
menuItem.forEach(each=> {
   
    each.onclick = () =>{
        document.querySelector('#res-nav').classList.toggle('res-nav--show')
    }
})

document.querySelector('.nav-menu').onclick =() =>{
    document.querySelector('#res-nav').classList.toggle('res-nav--show')
}