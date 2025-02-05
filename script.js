const base_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
"https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.0/lottie.min.js"

//https://api.openweathermap.org/data/2.5/weather?units=metric&%20q=tokyo%20&appid=514a3a560dc7ed6e4dafdd07021b6da5
const api_key = "514a3a560dc7ed6e4dafdd07021b6da5" ;

const btn = document.body.querySelector(".button");
const input_box = document.body.querySelector(".input");

btn.addEventListener("click", async(evt)=>{
  let city = input_box.value ;
  console.log(city);

  let response = await fetch(`${base_url}q=${city}&appid=${api_key}`);
  if(response.ok){
    let data = await response.json() ; 
    console.log(data);


    document.querySelector(".internaltext1").innerHTML = `${city.toUpperCase()} ${data.sys.country}`;
    document.querySelector(".internaltext2").innerHTML = `${data.weather[0].main}`;
    document.querySelector(".internaltext4").innerHTML = `${data.main.feels_like}`;
    document.querySelector(".internaltext6").innerHTML = `${Math.floor(data.wind.speed * 3.6)} kmph`;
    document.querySelector(".internaltext8").innerHTML = `${data.main.sea_level}`;
    document.querySelector(".internaltext10").innerHTML = `${data.main.pressure}`;

    let icon_code = data.weather[0].icon ;
    const image_url = `https://openweathermap.org/img/wn/${icon_code}@2x.png`;
    let imageresponse = await fetch(image_url);
    if (imageresponse.ok) {
      document.querySelector(".weather").style.backgroundImage = `url('${image_url}')`;
  } else {
      console.error("Image not found:", image_url);
  }
  }
  else {
    console.error(`Error: ${response.status} - ${response.statusText}`);
  }
})

//dark mode code 

// const toggle = document.body.querySelector(".darkmode");
// toggle.addEventListener("click" ,async(evt)=>{

// })

// Load Lottie animation
let animation = lottie.loadAnimation({
  container: document.body.querySelector(".darkmode"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "darkmode.json" 
});


let darkMode = false;

// Click event on animation
document.body.querySelector(".darkmode").addEventListener("click", () => {
    darkMode = !darkMode;

    // Toggle text color correctly
    if (darkMode) {
        document.querySelector("#logo").style.color = 'black';
        document.querySelector(".quote").style.color = 'black';
        document.querySelector(".contactus1").style.color = 'black';
        document.querySelector(".contactus").style.color = 'black';
        document.querySelector(".flexbox").style.background = '#F2F0EF';
        document.querySelector(".outer_box").style.background = 'white';

    } else {
        document.querySelector("#logo").style.color = 'white';
        document.querySelector(".quote").style.color = 'white';
        document.querySelector(".flexbox").style.background = 'black';
        document.querySelector(".outer_box").style.background = 'rgb(31, 30, 30)';
        document.querySelector(".contactus").style.color = 'white';
        document.querySelector(".contactus1").style.color = 'white';
       
    }

    // Play half animation per click
    animation.playSegments(darkMode ? [0, 50] : [51, 100], true);
});

