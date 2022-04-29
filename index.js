let key = "d74084fce813a5376cdf881ceff6be7e";
let container = document.getElementById("container");
let iframe = document.getElementById("gmap_canvas");
let top_div = document.getElementById("top");


async function getData() {
    try {
        let city = document.getElementById("city").value; // accepting data from html page

        let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key}&units=metric`)

        let data = await res.json();
        console.log(data)
        
        sevenday(data);
        showWeather(data);
    }

    catch (err){
        console.log(err);
    }
    
}

// for any city, i should be able to get its weather 

function showWeather(data) {
    console.log(data)

    container.innerHTML = null;

    let name = document.createElement("h2");
    name.innerText = data.city.name;
    
    let temp = document.createElement("h4");
    temp.innerText = `Temp - ${data.list[0].main.temp}°C`;

    let humidity = document.createElement("h4");
    humidity.innerText = `Humidity - ${data.list[0].main.humidity}`;

    let pressure = document.createElement("h4");
    pressure.innerText = `Pressure - ${data.list[0].main.pressure}`;

    let min = document.createElement("h4");
    min.innerText = `Min Temp - ${data.list[0].main.temp_min}°C`;

    let max = document.createElement("h4");
    max.innerText = `Max Temp - ${data.list[0].main.temp_max}°C`;

    iframe.src = `https://maps.google.com/maps?q=${data.city.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    container.append(name,temp,min,max,humidity,pressure);

}

let Seven = document.getElementById("bottom");

function sevenday(data){

    bottom.innerText = "";

    const weekday = ["Today","Tomorrow","Day 3","Day 4","Day 5","Day 6","Day 7"];

    let count = 0;
    
    data.list.forEach(function (el) {

        let card = document.createElement("div");
        card.setAttribute("id","seven");


        let days = document.createElement("h5");
        days.innerText = weekday[count++];

        let icon = document.createElement("img");
        icon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtYexv8zMSx3z3aWgiU4ZYInV78tQEkQqImw&usqp=CAU";

        let temp = document.createElement("p");
        temp.innerText = `Temp - ${el.main.temp}°C`;

        card.append(days,icon,temp);
        Seven.append(card);
    })

}