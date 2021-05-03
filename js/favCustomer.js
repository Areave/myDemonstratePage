import Service from './service.js'

export default async function favCustomer() {

    const service = new Service();

    const custImg = document.querySelector('.fav-customer-img');
    const custTitleEl = document.querySelector('.fav-customer-quote-title')
    const custQuoteEl = document.querySelector('.fav-customer-quote-text');

    service.getAPIObject('https://v2.jokeapi.dev/joke/Any')
        .then(joke => joke.setup.concat(joke.delivery))
        .then(joke => custQuoteEl.textContent = joke);

        custImg.setAttribute('src', 'https://thispersondoesnotexist.com/image')

    

}