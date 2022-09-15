// Getting html values
const searchResults = document.getElementById('searchResults')
const form = searchResults.querySelector("form")
const input = document.getElementById('userSearch');
const submit = document.getElementById('searchBtn');

const todayForecast = document.getElementById('today');
const todayWeather = document.getElementById('todayWeather');

const foreCast = document.getElementById('forecast');
const oneDayForecast = document.getElementById('oneDay');
const twoDayForecast = document.getElementById('twoDay');
const threeDayForecast = document.getElementById('threeDay');
const fourDayForecast = document.getElementById('fourDay');
const fiveDayForecast = document.getElementById('fiveDay');

// Global values
const apiKey = "e88a713ee7cb673f02a6c5ad053434d2";
const dt = new Date();

// Form functionality
form.addEventListener('click', e => {

    e.preventDefault();

    let inputValue = input.value;

    const APIURL = `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${apiKey}&units=imperial`;

        fetch(APIURL)

        .then(response => response.json())

        .then (data => {
            
            console.log(data)

            let i1 = 3
            const todayData = `
            <h2>
                <span> ${data.city.name} ${data.list[i1].dt_txt.slice(0,10)} <img src = https://openweathermap.org/img/wn/${data.list[i1].weather[0].icon}@2x.png> </span>
                </h2>
                <p> Temperature: ${Math.round(data.list[i1].main.temp)} °F </p>
                <p> Wind speed: ${Math.round(data.list[i1].wind.speed)} MPH </p>
                <p> Humidity: ${Math.round(data.list[i1].main.humidity)} % </p>
                `;
            
            const cityData1 = `
            <h2>
                <span> ${data.city.name} </span>
                </h2>
                <h3>${data.list[i1].dt_txt.slice(0,10)}</h3>
                <p> ${Math.round(data.list[i1].main.temp,)} °F </p>
                <figure>
                    <img src = https://openweathermap.org/img/wn/${data.list[i1].weather[0].icon}@2x.png>
                    <p> ${data.list[i1].weather[0].description} </p>
                </figure>
                `;

            let i2 = 11;
            const cityData2 = `
                <h2>
                <span> ${data.city.name} </span>
                </h2>
                <h3> ${data.list[i2].dt_txt.slice(0,10)} </h3>
                <p> ${Math.round(data.list[i2].main.temp,)} °F </p>
                <figure>
                    <img src = https://openweathermap.org/img/wn/${data.list[i2].weather[0].icon}@2x.png>
                    <p> ${data.list[i2].weather[0].description} </p>
                </figure>
                `;

            let i3 = 19;
            const cityData3 = `
                <h2>
                    <span> ${data.city.name} </span>
                </h2>
                <h3> ${data.list[i3].dt_txt.slice(0,10)} </h3>
                <p> ${Math.round(data.list[i3].main.temp,)} °F </p>
                <figure>
                    <img src = https://openweathermap.org/img/wn/${data.list[i3].weather[0].icon}@2x.png>
                    <p> ${data.list[i3].weather[0].description} </p>
                </figure>
                `;

            let i4 = 27;
            const cityData4 = `             
                <h2>
                <span> ${data.city.name} </span>
                </h2>
                <h3> ${data.list[i4].dt_txt.slice(0,10)} </h3>
                <p> ${Math.round(data.list[i4].main.temp,)} °F </p>
                <figure>
                    <img src = https://openweathermap.org/img/wn/${data.list[i4].weather[0].icon}@2x.png>
                    <p> ${data.list[i4].weather[0].description} </p>
                </figure>
                `;

            let i5 = 35;
            const cityData5 = `
                <h2>
                <span> ${data.city.name} </span>
                </h2>
                <h3> ${data.list[i5].dt_txt.slice(0,10)} </h3>
                <p> ${Math.round(data.list[i5].main.temp,)} °F </p>
                <figure>
                    <img src = https://openweathermap.org/img/wn/${data.list[i5].weather[0].icon}@2x.png>
                    <p> ${data.list[i5].weather[0].description} </p>
                </figure>
                `;

                todayForecast.innerHTML = todayData;
                todayWeather.appendChild(todayForecast);

                oneDayForecast.innerHTML = cityData1;
                foreCast.appendChild(oneDayForecast);

                twoDayForecast.innerHTML = cityData2;
                foreCast.appendChild(twoDayForecast);

                threeDayForecast.innerHTML = cityData3;
                foreCast.appendChild(threeDayForecast);

                fourDayForecast.innerHTML = cityData4;
                foreCast.appendChild(fourDayForecast);

                fiveDayForecast.innerHTML = cityData5;
                foreCast.appendChild(fiveDayForecast);
                
        })
    })

    form.reset();