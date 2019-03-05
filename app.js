var weatherService = require("./services/weatherService");
var express = require('express');
var app = express();

app.get('/weather', function (req, res) {
	weatherService.getWeatherForecast().
	then((err, data, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.json(data);
        }
	});
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
