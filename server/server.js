const express = require('express');
// const cors = require('cors');
const request = require('request');

const app = express();
// app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

let city;
const addQuery = (req, res, next) => {
  city = req.query.city;
  next();
};

app.get('/', addQuery, express.query(), getWeather);

returnObj = {
  name: 'name',
  temperature: 'temp',
  feelsLike: 'feel',
  description: 'desc',
};

function getWeather(req, res) {
  request(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cdeafd4bac68787f2bfae43a45a24006`,
    { json: true },
    (err, req, body) => {
      if (err) {
        return console.log(err);
      }
      returnObj.name = body.name;
      returnObj.temperature = body.main.temp; //DO CONVERSION
      returnObj.feelsLike = body.main.feels_like; //DO CONVERSION
      returnObj.description = body.weather[0].description;
      return returnObj;
    }
  );
}

// axios({
//   method: 'get',
//   url: `api.openweathermap.org/data/2.5/weather?q=${city}&appid=cdeafd4bac68787f2bfae43a45a24006`,
//   responseType: 'application/json',
// })
//   .then(function (response) {
//     console.log(response);
//     // res.json(response);
//   })
//   .catch(function (error) {
//     console.log('error' + error);
//   });
