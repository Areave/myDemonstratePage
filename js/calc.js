export default function calc() {
  const resultField = document.querySelector('.calculating-result span');

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
    elemCont.forEach((item) => {
      item.addEventListener('click', () => {
        elemCont.forEach((item) => {
          item.classList.remove('active');
        });
        item.classList.add('active');
        gender = item.getAttribute('id');
        localStorage.setItem('localGender', gender);
        setResult();
      });
    });
  }

  function setListenersRatio() {
    const elemCont = document.querySelectorAll('#ratio div');
    elemCont.forEach((item) => {
      item.addEventListener('click', () => {
        elemCont.forEach((item) => {
          item.classList.remove('active');
        });
        item.classList.add('active');
        ratio = +item.getAttribute('data-ratio');
        localStorage.setItem('localRatio', ratio);
        setResult();
      });
    });
  }

  function setListenersInput() {
    const elemCont = document.querySelectorAll('#parameters input');
    elemCont.forEach((item) => {
      item.addEventListener('input', () => {
        const val = item.value;
        const id = item.getAttribute('id');
        switch (id) {
          case 'height':
            height = val;
            // localStorage.setItem('localHeight', val);
            break;
          case 'weight':
            weight = val;
            // localStorage.setItem('localWeight', val);
            break;
          case 'age':
            age = val;
          // localStorage.setItem('localAge', val);
        }
        setResult();
      });
    });
  }

  function setResult() {
    if (!gender || !height || !weight || !age || !ratio) {
      document.querySelector('.enter-data').textContent='[please, enter data]'
      resultField.textContent = '';
      return;
    }

    if (gender === 'woman') {
      resultField.textContent =
        ((47.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio).toFixed() +
        ' cal';
    } else {
      resultField.textContent =
        ((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio).toFixed() +
        ' cal';
    }
    document.querySelector('.enter-data').textContent='';
  }

  function initCalc() {
    let {localGender, localHeight, localWeight, localAge, localRatio} =
      localStorage;

    ratio = localRatio ? localRatio : '';

    if (localGender) {
      gender = localGender;
      document.querySelectorAll('#gender div').forEach((elem) => {
        elem.classList.remove('active');
        if (elem.getAttribute('id') === gender) {
          elem.classList.add('active');
        }
      });
    } else {
      document.querySelector('#gender #woman').classList.add('active');
    }

    if (localRatio) {
      ratio = localRatio;
      document.querySelectorAll('#ratio div').forEach((elem) => {
        elem.classList.remove('active');
        if (elem.getAttribute('data-ratio') === ratio) {
          elem.classList.add('active');
        }
      });
    } else {
      document.querySelector('#ratio #medium').classList.add('active');
    }

    // height = localHeight ? localHeight : '';
    // weight = localWeight ? localWeight : '';
    // age = localAge ? localAge : '';
  }
}
