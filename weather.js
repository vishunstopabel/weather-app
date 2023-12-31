const city=document.querySelector("#cityname")
const button=document.querySelector(".find")
const temp=document.querySelector(".temp")
const humi=document.querySelector(".humiditiy")
const min_max_temp=document.querySelector(".min_max_temp")
const windspeed=document.querySelector(".windspeed")
const type=document.querySelector(".type")
let changeimg=document.querySelector(".img");
let changebgc=document.body.style;
let bwrong=document.querySelector(".bwrong")
let wrong=document.querySelector(".wrong")

    //for knowing day or night
    const now =new Date();
    const hour=now.getHours();
button.addEventListener("click",function(e){

  ///feaching the weather data
    const apiKey = "K9TIaQuN97TAR43IZUY6/w==m5hzATYgNh2mtvtK"; // Replace with your actual API key

    fetch('https://api.api-ninjas.com/v1/weather?city='+ city.value, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
        },
    }).then(function(e){
     
        return e.json()
    })
    .then(function(e){
      console.log(e)
      if(e.error=="An unexpected error occured."){
        error();
      }
      else{
        compelete(e)
      }
      compelete(e)
    }).catch((err)=>{
     
      
    })
  
    city.value=''
})
bwrong.addEventListener("click",function(){
  wrong.style.display="none"
})
function error(){
  wrong.style.display="inline-block"
}
////dispaly of the data
function compelete(e){
    console.log(hour)
   temp.innerHTML=`${e.temp}c`
    humi.innerHTML=`${e.humidity}%`
    min_max_temp.innerHTML=`(${e.min_temp}-${e.max_temp})c`
    type.innerHTML=`${e.cloud_pct}%`
    windspeed.innerHTML=`${e. wind_speed}kph`
 

    ///day
 if(hour>5&&hour<18) 
 { if(e.cloud_pct<40&&e.cloud_pct>20){
   
    changeimg.src="aceets/weather png/cloudy.png"
    changebgc.backgroundImage="url(aceets/bgcimages/daycloudy.jpg)"
    }
 if(e.cloud_pct<100&&e.cloud_pct>40){
   changeimg.src="aceets/weather png/heavy-rain.png"
   changebgc.backgroundImage="url(aceets/bgcimages/rainy.jpg)"
 }
 else{
    changeimg.src="aceets/weather png/sunny.png"
    changebgc.backgroundImage="url(aceets/bgcimages/sunny.jpg)"
 }
}
//night
else{
     if(e.cloud_pct<40&&e.cloud_pct>20){
   
        changeimg.src="aceets/weather png/night/cloudy-night.png"
        changebgc.backgroundImage="url(aceets/bgcimages/night/cloudy.jpg)"
        }
     if(e.cloud_pct<100&&e.cloud_pct>40){
       changeimg.src="aceets/weather png/night/thunder.png"
       changebgc.backgroundImage="url(aceets/bgcimages/night/rainy)"
       
     }
     else{
        changeimg.src= changeimg.src="aceets/weather png/night/night.png"
        changebgc.backgroundImage="url(aceets/bgcimages/night/clear.jpg)"
     }
    }
 
}




