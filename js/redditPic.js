import Service from './service.js'

export default function redditPic() {


    // get random pic and load it on page
    const randomPicArr = new Service().getRandomPicFromReddit();
    loadRandomRedditPic(randomPicArr);


// functions
    async function loadRandomRedditPic(picPromise) {
        picPromise.then(ar => {
            const title = ar[0];
            const url = ar[1];

            document.querySelector('.reddit-pic-title').textContent = title;

            const redditPic = document.createElement('img');
            redditPic.classList.add('reddit-pic-picture');
            redditPic.setAttribute("src", url);
            document.querySelector(".reddit-pic_wrapper").append(redditPic);
        }

        )
    }

}