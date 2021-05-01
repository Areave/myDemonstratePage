import redditPic from './redditPic.js';
import reviewCards from './reviewCards.js';

import Service from './service.js';
const service = new Service();


window.addEventListener('DOMContentLoaded', () => {

    redditPic();
    reviewCards(4);


})






