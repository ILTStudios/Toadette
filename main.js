const weather_close = document.querySelector('.data-container');
const weather_close_btn = document.querySelector('.close');

let is_open = false;

weather_close_btn.addEventListener('click', () => {
    if(!is_open){
        weather_close.classList.add('open');
        is_open = true;
    }
    else{
        weather_close.classList.remove('open');
        is_open = false;
    }
});