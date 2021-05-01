
// servise class for methods
export default class Service {

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

    // get random pic from reddit.com/r/EarthPorn (it's not porn, I swear)
    async getRandomPicFromReddit() {

        const randomPic = await this.getAPIObject('https://www.reddit.com/r/EarthPorn/.json')
            .then(json => {
                const arSize = json.data.children.length;
                const randomNum = Math.floor(Math.random() * arSize);
                return [json.data.children[randomNum].data.title, json.data.children[randomNum].data.url];
            });
        return randomPic;
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