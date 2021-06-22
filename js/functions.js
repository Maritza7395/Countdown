let end = new Date(); // mes dia año
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

function start() {
    let dias = document.getElementById('dias').value;
    let horas = document.getElementById('horas').value;
    let minutos = document.getElementById('minutos').value;
    let segundos = document.getElementById('segundos').value;

    end.setDate(end.getDate() + parseInt(dias));
    end.setHours(end.getHours() + parseInt(horas));
    end.setMinutes(end.getMinutes() + parseInt(minutos));
    end.setSeconds(end.getSeconds() + parseInt(segundos));
    $("#play").css("display", "none");
    load();
}

function load() {
    timer = setInterval(showRemaining, 1000);
}

function showRemaining() {
    let now = new Date();
    let distance = end - now;
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'EXPIRED!';
        return;
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);
    if (days < 10) {
        document.getElementById('dias').value = '0' + days;
    } else {
        document.getElementById('dias').value = days;
    }
    if (hours < 10) {
        document.getElementById('horas').value = '0' + hours;
    } else {
        document.getElementById('horas').value = hours;
    }
    if (minutes < 10) {
        document.getElementById('minutos').value = '0' + minutes;
    } else {
        document.getElementById('minutos').value = minutes;
    }
    if (seconds < 10) {
        document.getElementById('segundos').value = '0' + seconds;
    } else {
        document.getElementById('segundos').value = seconds;
    }
}