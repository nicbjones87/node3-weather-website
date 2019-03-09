const request = require('request');

const forecast = (lat, long, callback) => {
	const url =
		'https://api.darksky.net/forecast/016689e6156cde369907a76eb686adc5/' + lat + ',' + long;
	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather service!', undefined);
		} else if (body.error) {
			callback(body.error, undefined);
		} else {
			callback(
				undefined,
				body.daily.data[0].summary +
					' It is currently ' +
					body.currently.temperature +
					' degrees out.  There is ' +
					body.currently.precipProbability +
					"% chance of rain.  Today's high will be " +
					body.daily.data[0].temperatureHigh +
					' degrees, and the low will be ' +
					body.daily.data[0].temperatureLow +
					' degrees.'
			);
		}
	});
};

module.exports = forecast;
