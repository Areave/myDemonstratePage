
// servise class for methods
export default class Service {





    async getScriptText(scriptFileName) {
        const script = await fetch('./js/' + scriptFileName)
            .then(data => data.text());
        console.log(script);
        return script;
    }

    // main method
    async getAPIObject(url) {
        const res = await fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    throw new Error("wrong data");
                }
            });

        return res;
    }

    // get data set from api.icndb.com/jokes/random
    async createJokesArr(amount) {
        let jokeArr = [];
        for (let i = 0; i < amount; i++) {
            jokeArr.push(this.getRandomChuckNorrisJoke());
        }

        return Promise.all(jokeArr);
    }

    // get one random Chuck Norris joke from api.icndb.com/jokes/random
    async getRandomChuckNorrisJoke() {
        const res = await this.getAPIObject("http://api.icndb.com/jokes/random")
            .then(obj => obj.value.joke);
        return res;
    }

    // get fake json data from db made on mockaroo.com
    async getCardObjArr(num) {
        let arr = [];

        const db = await this.getAPIObject('../db/db_full.json');

        for (let i = 0; i < num; i++) {
            const obj = db[Math.floor(Math.random() * (db.length - 1))];
            arr.push(obj);
        }
        return arr;
    }

    // get array of random pic from reddit.com/r/EarthPorn (it's not porn, I swear)
    async getPicArray() {
        const picArray = this.getAPIObject('https://www.reddit.com/r/EarthPorn/.json')
            .then(json => json.data.children);
        return await picArray;
    }

    // get array[title, url] of random pic from array
    getRandomPic(picArray) {
        const arSize = picArray.length;
        const randomNum = Math.floor(Math.random() * arSize);
        return [picArray[randomNum].data.title, picArray[randomNum].data.url];
    }

    // make one suitable object from 2 different promises
    formatComment(comm, text) {
        const obj = {
            name: comm.name + " " + comm.second_name,
            mail: comm.email,
            text: text
        };
        return obj;

    }



}