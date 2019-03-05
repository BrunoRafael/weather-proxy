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

app.listen(process.env.PORT || 3000, () => {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
