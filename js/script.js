import redditPic from './redditPic.js';
import reviewCards from './reviewCards.js';

import Service from './service.js';


window.addEventListener('DOMContentLoaded', () => {

    redditPic();
    reviewCards(3);

    const f = fetch('./js/script.js');
    f.then(data=>data.text())
    .then(text=>console.log(text + 33));

    // const service = new Service;
    // const code = service.getAPIObject('./service.js');
    // code.then(res => { console.log(res) });


    // function download(text, filename){
    //     var blob = new Blob([text], {type: "text/plain"});
    //     var url = window.URL.createObjectURL(blob);
    //     var a = document.createElement("a");
    //     a.href = url;
    //     a.download = filename;
    //     a.click();
    //   }      
    //   download("this is the file", "./text.txt");



    // const file = new File('./service.js')
    // const reader = new FileReader();
    // reader.onload = function (event) {
    //     const contents = event.target.result;
    //     console.log("Содержимое файла: " + contents);
    // };

    // reader.onerror = function (event) {
    //     console.error("Файл не может быть прочитан! код " + event.target.error.code);
    // };

    // reader.readAsText(file);


})






