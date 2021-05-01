import Service from './service.js'

export default async function redditPic() {

    const service = new Service();


    // create array for not loading it with every click on picture
    const array = await service.getPicArray();

    // get random pic and load it on page
    const pic = service.getRandomPic(array)
    loadRandomRedditPic(pic);
    // add EventListener to image
    pictureAddClickEvent();
    pictureAddErrorEvent();



    // functions
    function loadRandomRedditPic(array) {

        const title = array[0];
        const url = array[1];
        document.querySelector('.reddit_pic-title').textContent = title;
        const redditPic = document.querySelector('.reddit_pic-picture');
        redditPic.setAttribute("src", url);
        document.querySelector(".reddit_pic-wrapper").append(redditPic);
    }

    function pictureAddClickEvent() {
        const pic = document.querySelector('.reddit_pic-picture');
        pic.addEventListener('click', () => {
            const picAr = service.getRandomPic(array);
            try {
                loadRandomRedditPic(picAr);
            }
            catch (e) {
                console.log("!!!!!!!!!!", e);
            }

        })

    }


    function pictureAddErrorEvent() {
        const pic = document.querySelector('.reddit_pic-picture');
        pic.addEventListener('error', () => {

            pic.setAttribute('src', 'https://www.inksystem.biz/uploaded/img/article/error-5100.jpg')
            pictureAddClickEvent();
        })
    }

}