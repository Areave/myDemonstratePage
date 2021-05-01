import Service from './service.js'

export default function reviewCards(amountOfCards) {

    const service = new Service;

    const arrOfCardsContent = service.getCardObjArr(amountOfCards);
    const arrOfChuckNoorrisJokes = service.createJokesArr(amountOfCards);

    // render review cards
    loadCards(arrOfCardsContent, arrOfChuckNoorrisJokes);

    // functions
    async function loadCards(cardsArrPromise, chuckNorrisJokesArrPromise) {

        for (let i = 0; i < amountOfCards; i++) {

            const card = Promise.all([cardsArrPromise.then(res => res[i]), chuckNorrisJokesArrPromise.then(res => res[i])]);
            card.then(res => {

                const cardObj = res[0];
                const joke = res[1];
                const formatCard = service.formatComment(cardObj, joke);

                const { name, mail, text } = formatCard;
                const newCard = document.createElement('div');
                newCard.classList.add('card-card');
                newCard.innerHTML = `
                <div class="card-header">
                            <div class="card-img-wrapper">
                                <img src="./img/review${i + 1}.jpg" alt="${name}" class="card-img card-img${i + 1}">
                            </div>
                            <div class="card-header-title">
                                <span class="card-name">${name}</span>
                                <span class="card-mail">${mail}</span>
                            </div>
                        </div>
                        <p class="card-review">
                            ${text}
                        </p>
                `;

                document.querySelector('.cards-wrapper').append(newCard);
            });
        };
    }

}