let ip_apiKey = '190b45c6b3a1b10992773c204a211dbcf2abb276983710d7142c2f93';
const ip = fetch(`https://api.ipdata.co?api-key=${ip_apiKey}`)
    .then((response) => response.json())
    .then((data) => {
    return longlat = {
        long: data.longitude,
        lat: data.latitude,
        location: data.city,
        data: data,
    };
});

ip_func = () => {
    ip.then((a) => {
        let weather_api = 'e30ebb7aab8826818fbbe25e3c4f7e69';
        const weather = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${a.lat}&lon=${a.long}&exclude=minutely,hourly&units=metric&appid=${weather_api}`)
        .then((response) => response.json())
        .then((data) => {
            parsed_data = {
                current: {
                    temp: data.current.temp,
                    icon: data.current.weather[0].description,
                    main: data.current.weather[0].main,
                    location: a.location,
                },
                daily: [
                    {
                        temp: data.daily[0].temp.day,
                        icon: data.daily[0].weather[0].main,
                    },
                    {
                        temp: data.daily[1].temp.day,
                        icon: data.daily[1].weather[0].main,
                    },
                    {
                        temp: data.daily[2].temp.day,
                        icon: data.daily[2].weather[0].main,
                    },
                    {
                        temp: data.daily[3].temp.day,
                        icon: data.daily[3].weather[0].main,
                    },
                    {
                        temp: data.daily[4].temp.day,
                        icon: data.daily[4].weather[0].main,
                    },
                    {
                        temp: data.daily[5].temp.day,
                        icon: data.daily[5].weather[0].main,
                    },
                    {
                        temp: data.daily[6].temp.day,
                        icon: data.daily[6].weather[0].main,
                    },
                ]
            };
            
            const weather_day_container = document.querySelector('.weather_day_container');
            let i = 1;
            parsed_data.daily.forEach((element, index) => {
                const daily_container = document.createElement('div');
                daily_container.classList.add('individual-day');
                const day = document.createElement('div');
                day.classList.add('day');
                const icon = document.createElement('div');
                icon.classList.add('icon');
                const temp = document.createElement('div');
                temp.classList.add('day-temperature');

                date = new Date();
                date.setDate(date.getDate() + i);
                i += 1;

                day.innerText = `${date.toLocaleDateString('default', { weekday: 'long' })}`;
                temp.innerText = `${Math.floor(element.temp)} C`;
                icon.style.backgroundImage = `url(weather-icons/${element.icon.toLowerCase()}.png)`;

                daily_container.appendChild(day);
                daily_container.appendChild(icon);
                daily_container.appendChild(temp);

                weather_day_container.appendChild(daily_container);
            });
            
            const main_weather = document.querySelector('.main-weather');
            const icon = document.querySelector('.weather-icon');
            const temp = document.querySelector('.temperature');
            const description = document.querySelector('.weather-description');
            const location = document.querySelector('.area-heading');

            temp.innerText = `${Math.floor(parsed_data.current.temp)} C`;
            icon.style.backgroundImage = `url(weather-icons/${parsed_data.current.icon.toLowerCase()}.png)`;
            description.innerText = `${parsed_data.current.main}`;
            location.innerText = `${parsed_data.current.location}`;
        });
    });
};

ip_func();