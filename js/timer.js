import Service from './service.js';

export default function timer() {


    // const cityField = document.querySelector('.city');
    const weekdayField = document.querySelector('.weekday');
    const dayField = document.querySelector('.day');
    const yearField = document.querySelector('.year');
    const monthField = document.querySelector('.month');

    const hourField = document.querySelector('.timer-card.hours .num');
    const minField = document.querySelector('.timer-card.min .num');
    const secField = document.querySelector('.timer-card.sec .num');


    setData(new Date());

    setInterval(() => {
        const curTime = new Date();
        hourField.textContent = curTime.getHours();
        minField.textContent = curTime.getMinutes();
        secField.textContent = curTime.getSeconds();
    }, 1000)

    function setData(data) {

        const weekDayAr = [
            'sunday',
            'monday',
            'thursday',
            'wensday',
            'thursday',
            'friday',
            'saturday'
        ];

        const monthAr = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]

        yearField.textContent = data.getFullYear();
        monthField.textContent = monthAr[data.getMonth()] ;
        dayField.textContent = data.getDate();
        weekdayField.textContent = weekDayAr[data.getDay()];
    }

}