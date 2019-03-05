// Require node-oauth package: npm install oauth
// Copyright 2019 Oath Inc. Licensed under the terms of the zLib license see https://opensource.org/licenses/Zlib for terms.

var OAuth = require('oauth');

const API_URL = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
const APP_ID = '6OxMiY4s';
const CONSUMER_KEY = 'dj0yJmk9elBlcnZkOUZsVUJiJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTY5';
const CONSUMER_SECRET = '539a49d3e33d3b4d3d4fafe9ec19e227db5243bb';
const CONCAT = '&';

var header = {
    "X-Yahoo-App-Id": APP_ID
};
var request = new OAuth.OAuth(
    null,
    null,
    CONSUMER_KEY,
    CONSUMER_SECRET,
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);

var weatherService = {
	/** 
	 * 
	 */
	getWeatherForecast: (locationInfo) => {
		let url = new URL(API_URL);

		/* Append parameters */
		Object.keys(locationInfo).forEach(key => url.searchParams.append(key, locationInfo[key]))
		return request.get(url, null, null);
	}
}

module.exports = weatherService;
