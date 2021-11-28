var req = new XMLHttpRequest();
const apiKey = "d52c0075ae1e9e2ccb6aef2e9c5b3a67";
req.open("GET", `https://restcountries.com/v3/all`, true);
// req.open("GET", `https://restcountries.com/v3/capital/${capital}`, true);
req.send();
req.onload = function () {
  var result = JSON.parse(req.response);
  for (i in result) {
    try {
      var name = result[i]["name"]["common"];
      var latlong = result[i]["latlng"];
      if (latlong.length === 0)
        throw new Error("Co-ordinates is not available");
      weatherData(name, ...latlong);
    } catch (err) {
      console.log(err.message);
    }
  }

  function weatherData(name, lat, long) {
    // console.log(`${name} ${lat} ${long}`);
    // standard(Default):Kelvin,metric:Celsius,imperial:Fahrenheit
    let units = "metric";
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${units}&appid=${apiKey}`;
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
    request.onload = function () {
      var data = JSON.parse(request.response);
      console.log(`${name}:${data["main"]["temp"]}`);
    };
  }
};
