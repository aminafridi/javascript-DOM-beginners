const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details =document.querySelector('.details');
const time = document.querySelector('img.time')
const icon =document.querySelector('.icon img');

const updateUI =(data) =>{
    //==========destructuring this 
       const cityDets = data.cityDets;
       const weather = data.weather;
    //=======destructing the above code like=====
    // const {cityDets,weather} = data;



 details.innerHTML =`
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;</span>
        </div>
    `;
//================update the night and day and icon/images==========
const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute("src",iconSrc);



let timeSrc = null;
if(weather.IsDayTime){
    timeSrc ='day.svg'
}else {
    timeSrc = 'night.svg';
}
time.setAttribute("src",timeSrc)



//=================remove the none class if present==========
   if (card.classList.contains('d-none')){
       card.classList.remove('d-none');
   }

};





const updateCity= async (city) =>{
    // console.log(city);
const cityDets= await getCity(city);
const weather = await getWeather(cityDets.Key);
//   console.log(cityDets);
return{
    cityDets,
     weather
};


};

cityForm.addEventListener('submit',e =>{
    e.preventDefault();
          const city= cityForm.city.value.trim();
          cityForm.reset();
            

        updateCity(city)
        .then(data=>updateUI(data))
            // console.log(data))
        .catch(err=>console.log(err));  
});

