const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');

const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
  event.preventDefault();
  let cityVale = cityName.value;
  if (cityVale === '') {
    city_name.innerHTML = 'Please enter a city name';
    city_name.style.color = 'red';
    datahide.classList.add('data_hide');
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVale}&units=metric&appid=508a112b471b83570008212adce9c112`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real_val.innerHTML = `${arrData[0].main.temp}`;

      // condition to check sunny or cloudy
      const tempMood = arrData[0].weather[0].description;
      if (tempMood == 'Clear') {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color : #eccc68;'></i>";
      } else if (tempMood == 'Clouds') {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color : #f1f2f6;'></i>";
      } else if (tempMood == 'Rain') {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-showers-heavy' style='color : #a4b0be;'></i>";
      } else if (tempMood == 'Snow') {
        temp_status.innerHTML =
          "<i class='fas fa-snowflake' style='color : #;'></i>";
      } else if (tempMood == 'Mist') {
        temp_status.innerHTML =
          "<i class='fas fa-smog' style='color : #eccc68;'></i>";
      } else if (tempMood == 'Thunderstorm') {
        temp_status.innerHTML =
          "<i class='fas fa-bolt' style='color : #eccc68;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color : #eccc68;'></i>";
      }
      datahide.classList.remove('data_hide');
    } catch (error) {
      city_name.innerHTML = 'Please enter a city name Perfectly';
      datahide.classList.add('data_hide');
      console.log(error);
    }
  }
};

const currentDay = () => {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  
  var d = new Date();
  let day = weekday[d.getDay()];
  document.getElementById("day").innerHTML = day;
  var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() 
  document.getElementById("today_date").innerText = datestring
};
currentDay();

submitBtn.addEventListener('click', getInfo);
