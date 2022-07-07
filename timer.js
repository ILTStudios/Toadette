class DateTime{
    render() {
        const day = document.querySelector('.day-count');
        const time = document.querySelector('.time');

        function normulation(num){
            if(num < 10){
                num = "0" + num; return num;
            }else return num;
        }
        function normulatehour(num){
            if(num > 12){num = num - 12; return normulation(num)} else return num;
        }

        updateClock(); 
        
        function updateClock(){
            let time_obj = new Date();
            let hours = normulatehour(time_obj.getHours());
            let minutes = normulation(time_obj.getMinutes());
            time.innerText = `${hours + ':' + minutes}`;
            day.innerText = `${time_obj.getFullYear() +
                ', ' + time_obj.toLocaleString('default', { month : "long"}) + 
                ' ' + time_obj.getDate()}`;
        
            setTimeout(updateClock, 1000);
        }
    }
}

date = new DateTime();
date.render();