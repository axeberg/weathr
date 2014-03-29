'use strict';

angular.module('weathrApp')
  .controller('CurrentCtrl', function ($scope, $http, GeolocationService, WeatherService, WeatherIconService) {
     $scope.position = null;
     $scope.weather = null
     $scope.forecast = null;

     GeolocationService().then(function(position) {
       $scope.position = position;
     });

     $scope.changeLocation = function(location) {
        if(location) {
          $('#myModal').modal('hide');
          WeatherService.current.byCity(location).then(function(data) {
            $scope.weather = data;
            $scope.weather.temperature = Math.floor(data.main.temp);
            $scope.weather.today = moment().format('llll');
            $scope.weather.description = data.weather[0].description;

            var weatherId = data.weather[0].id;
            $scope.weather.icon = WeatherIconService(weatherId);
          });

          WeatherService.current.byCity(location).then(function(data){
            $scope.weather = data;
            $scope.weather.temperature = Math.floor(data.main.temp);
            $scope.weather.today = moment().format('llll');
            $scope.weather.description = data.weather[0].description;

            var weatherId = data.weather[0].id;
            $scope.weather.icon = WeatherIconService(weatherId);

            $scope.weather.wind = data.wind;
            $scope.weather.humidity = data.main.humidity;
            $scope.weather.airpressure = data.main.pressure;
            $scope.weather.sunrise = moment.unix(data.sys.sunrise).format('HH:mm');
            $scope.weather.sunset = moment.unix(data.sys.sunset).format('HH:mm');
          });

          WeatherService.forecast.byCity(location).then(function(data){
            $scope.forecast = data;
            $scope.forecast.day = moment().format('dddd, [Today]');
            $scope.forecast.weekdays = {};
            $scope.forecast.weekdays.day = [];

            for(var i=1; i < data.list.length; i++) {
              $scope.forecast.weekdays.day.push({
                 id: data.list[i].dt,
                 name: moment.unix(data.list[i].dt).format('dddd'),
                 description: data.list[i].weather[0].description,
                 humidity: data.list[i].humidity,
                 pressure: data.list[i].pressure,
                 temp: {
                   max: Math.floor(data.list[i].temp.max),
                   min: parseInt(data.list[i].temp.min)
                 },
                 weather: {
                   icon: WeatherIconService(data.list[i].weather[0].id),
                 },
                 wind: data.list[i].speed,
              });
            }

            $scope.weekdayFilter = function(day){
              return day;
            }
          });

          WeatherService.forecastHourly.byCity(location).then(function(data){
            $scope.forecastHourly = data;
            $scope.forecastHourly.time = {};
            $scope.forecastHourly.time.data = [];

            for(var i=0; i < 3; i++) {
              $scope.forecastHourly.time.data.push({
                hour: moment.unix(data.list[i].dt).format('HH:mm'),
                temp: {
                  max: Math.round(data.list[i].main.temp_max),
                  min: Math.floor(data.list[i].main.temp_min)
                },
                weather: {
                  icon: WeatherIconService(data.list[i].weather[0].id)
                }
              });
            }

            $scope.hourFilter = function(data){
              return data;
            }
          });
        }
     }

     $scope.$watch('position', function(position){
       if(!position) return;

       WeatherService.current.byPosition(position.coords.latitude, position.coords.longitude).then(function(data){

         $scope.weather = data;
         $scope.weather.temperature = Math.floor(data.main.temp);
         $scope.weather.today = moment().format('dddd, MMMM Do YYYY, HH:mm');
         $scope.weather.description = data.weather[0].description;

         var weatherId = data.weather[0].id;
         $scope.weather.icon = WeatherIconService(weatherId);

         $scope.weather.wind = data.wind;
         $scope.weather.humidity = data.main.humidity;
         $scope.weather.airpressure = Math.floor(data.main.pressure);
         $scope.weather.sunrise = moment.unix(data.sys.sunrise).format('HH:mm');
         $scope.weather.sunset = moment.unix(data.sys.sunset).format('HH:mm');
       });

       WeatherService.forecast.byPosition(position.coords.latitude, position.coords.longitude).then(function(data){
         $scope.forecast = data;
         $scope.forecast.day = moment().format('[Today]');
         $scope.forecast.weekdays = {};
         $scope.forecast.weekdays.day = [];

         console.log(data);

         for(var i=1; i < data.list.length; i++) {
           $scope.forecast.weekdays.day.push({
              id: data.list[i].dt,
              name: moment.unix(data.list[i].dt).format('dddd'),
              description: data.list[i].weather[0].description,
              humidity: data.list[i].humidity,
              pressure: Math.floor(data.list[i].pressure),
              temp: {
                max: Math.floor(data.list[i].temp.max),
                min: parseInt(data.list[i].temp.min)
              },
              weather: {
                icon: WeatherIconService(data.list[i].weather[0].id),
              },
              wind: data.list[i].speed,
           });
         }

         $scope.weekdayFilter = function(day){
           return day;
         }
       });

       WeatherService.forecastHourly.byPosition(position.coords.latitude, position.coords.longitude).then(function(data){
         $scope.forecastHourly = data;
         $scope.forecastHourly.time = {};
         $scope.forecastHourly.time.data = [];

         for(var i=0; i < 3; i++) {
           $scope.forecastHourly.time.data.push({
             hour: moment.unix(data.list[i].dt).format('HH:mm'),
             temp: {
               max: Math.round(data.list[i].main.temp_max),
               min: Math.floor(data.list[i].main.temp_min)
             },
             weather: {
               icon: WeatherIconService(data.list[i].weather[0].id)
             }
           });
         }

         $scope.hourFilter = function(data){
           return data;
         }
       });
     });
  });