const loc= document.querySelector(".location");
const temperature = document.querySelector(".temperature-degree");
const  descr = document.querySelector(".description-api");
const   userInput = document.getElementById("locations");
const  findbtn = document.querySelector(".find-btn");
const apiKey = '&units=metric&appid=13491309f1c64b3be0f1007c8cecf389';
const url = 'api.openweathermap.org/data/2.5/weather?q=';
const proxy = 'https://cors-anywhere.herokuapp.com/';


findbtn.addEventListener('click', () => {
   
   let api =`${proxy}`+ url + userInput.value + apiKey;
   console.log(api);
   fetch(api)
    .then(Response =>{
           return Response.json();
    })
     .then(data => {
        
        const {temp} = data.main;
        const {description} = data.weather[0];
        const {name} = data;
        console.log(data);
        convertTof(temp);
        //change Dom with data from api
        loc.textContent = name;
        temperature.textContent = tempInf ;
        descr.textContent = description;
     });

   


});

function convertTof(temp){
    

return  tempInf = (temp /5)*9 +32;

};
  