const btnSearch = document.getElementById("btnSearch");
const txtCity = document.getElementById("txtCity");
const resultOut = document.getElementById("result");



btnSearch.onclick = function () {
    const city = txtCity.value;
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city +  " +&appid=f8146cfefcf68002a3ad0e94277db4fb";
    //const url= "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=f8146cfefcf68002a3ad0e94277db4fb"
    console.log(url);
    fetch(url).then(response => {
        response.json().then(json => {
            let data = json;
            let output = formatResponse(data);
            resultOut.innerHTML = output;
            console.log(result);
            
           
        });
    });
}



$( document ).ready(function() {
    $('#city').change(function(){
        $('#txtcity').html( $('#city').val());
    });
});





function kelvinToFahrenheit(kTemp) {
    const fTemp = kTemp * (9 / 5) - 459.67;
    return fTemp;
}
function msToMPH(ms) {
    return ms * 2.237;

}
function formatResponse(data) {
    let conditions = ""
    if (data.weather.length > 1) {
        for (var i = o; i < data.weather.length; i++) {
            conditions += data.weather[i].main;
            if (i != (data.weather.length - 1)) {
                conditions += " and ";
            }

        }


    } else {
        conditions += data.weather[0].main;
    
}
    let out = `<p><strong>Current Conditions for ${data.name}</strong></p>
  
<p><strong>Temperature:</strong>${Math.round(kelvinToFahrenheit(data.main.temp))}F<br/>
<p><strong>Humidity:</strong>${data.main.humidity}%<br/>
<p><strong>Pressure:</strong>${data.main.pressure}mb<br/>
<p><strong>Wind:</strong> ${Math.round(msToMPH(Math.round(data.wind.speed)))}MPH<br/>
     <p> ${conditions}</p>`;
return (out);
}


