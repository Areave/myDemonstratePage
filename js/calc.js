export default function calc() {

    const resultField = document.querySelector('.calculating__result span');

    // set listeners on fields
    setListenersGender();
    setListenersRatio();
    setListenersInput();

    let gender, height, weight, age, ratio;

    // init start values from localStorage, calc start result
    initCalc();
    setResult();


    function setListenersGender() {
        const elemCont = document.querySelectorAll('#gender div');
        elemCont.forEach(item => {
            item.addEventListener('click', () => {
                elemCont.forEach(item => {
                    item.classList.remove("active");
                });
                item.classList.add("active");
                gender = item.getAttribute('id');
                localStorage.setItem('localGender', gender);
                setResult();
            })
        })
    }

    function setListenersRatio() {
        const elemCont = document.querySelectorAll('#ratio div');
        elemCont.forEach(item => {
            item.addEventListener('click', () => {
                elemCont.forEach(item => {
                    item.classList.remove("active");
                });
                item.classList.add("active");
                ratio = +item.getAttribute('data-ratio');
                localStorage.setItem('localRatio', ratio);
                setResult();
            })
        })
    }

    function setListenersInput() {
        const elemCont = document.querySelectorAll("#parameters input");
        elemCont.forEach(item => {
            item.addEventListener('input', () => {

                const val = item.value;
                const id = item.getAttribute('id');
                switch (id) {
                    case "height": height = val;
                        // localStorage.setItem('localHeight', val);
                        break;
                    case "weight": weight = val;
                        // localStorage.setItem('localWeight', val);
                        break;
                    case "age": age = val;
                        // localStorage.setItem('localAge', val);
                }

                console.log(localStorage.getItem(id))
                setResult();
            })
        })
    }

    function setResult() {

        if (!gender || !height || !weight || !age || !ratio) {
            resultField.textContent = "enter data";
            return;
        }

        if (gender === 'woman') {
            resultField.textContent = ((47.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio).toFixed();
        } else {
            resultField.textContent = ((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio).toFixed();
        }
    }

    function initCalc() {

        let { localGender, localHeight, localWeight, localAge, localRatio } = localStorage;

        gender = localGender ? localGender : '';
        ratio = localRatio ? localRatio : '';
        // height = localHeight ? localHeight : '';
        // weight = localWeight ? localWeight : '';
        // age = localAge ? localAge : '';

    }

}