let places='';
let temp ='';
let description ='';
const container = document.querySelector('.container')
const search = document.querySelector('.searchbox button')
// const place = document.querySelector('.searchbox input').value;
const weatherbox = document.querySelector('.weatherbox img')
const weatherbox1 = document.querySelector('.weatherbox')
const weatherdetails = document.querySelector('.weather-details')
const notfound = document.querySelector('.notfound')



search.addEventListener("click" , async ()=>{
     places = document.querySelector('.searchbox input').value;

     const url = `https://api.openweathermap.org/data/2.5/forecast?q=${places},${places},${places}&appid=95987770faa0132934bb5d3d0052b257`;
     let response = await fetch(url);
console.log(response);
let data= await response.json();
if(response.statusText==='Not Found'){
    document.querySelector('.notfound').style.scale="1";
    document.querySelector('.notfound').style.opacity="1";
    document.querySelector('.notfound').style.display="flex";
    container.style.height="450px";

}
temp= data.list[0].main.temp;
description=data.list[0].weather[0].description;
humidity=data.list[0].main.humidity;
wind = data.list[0].wind.speed;
console.log(humidity)

console.log(data)
// console.log(data.list[0].main.temp);
// console.log(data.list[0].weather[0].description)

           weatherbox1.querySelector('.temperature p').innerText = `${Math.round(temp-274)} C`;
           weatherbox1.querySelector('.description p').innerText = ` ${description}`;

                // Set image based on weather description
                if (description === 'clear sky') {
                    weatherbox.src = 'sunny.jpg';
                } else if (description === 'cloudy' || description === 'broken clouds' || description === 'partly cloudy' || description === 'few clouds') {
                    weatherbox.src = 'partly cloudy.jpg'; // Make sure the file name is correct
                } else if (description.includes('thunderstorm')) {
                    weatherbox.src = 'stormy.jpg';
                } else if (description.includes('rain') || description.includes('drizzle') || description.includes('rainy')) {
                    weatherbox.src = 'rainy.jpg';
                } else {
                    weatherbox.src = 'windy.jpg'; // Make sure the file name is correct
                }

                weatherdetails.querySelector('.humidity p').innerText = `Humidity: ${humidity}`;
                weatherdetails.querySelector('.wind p').innerText =`Wind: ${wind}`;
console.log(description);


                container.style.height="650px";

})
