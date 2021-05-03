import Service from './service.js';
import redditPic from './redditPic.js';
import reviewCards from './reviewCards.js';
import calc from './calc.js';
import menu from './menu.js';
import timer from "./timer.js";
import favCustomer from './favCustomer.js';




window.addEventListener('DOMContentLoaded', () => {

    const service = new Service();


    redditPic();
    reviewCards(3);
    calc();
    menu();
    timer();
    favCustomer();

})






