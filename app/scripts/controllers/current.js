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
            console.log(data);
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
          });

          WeatherService.forecast.byCity(location).then(function(data){
            $scope.forecast = data;
            $scope.forecast.day = moment().format('dddd [, Today]');
            $scope.forecast.weekdays = {};
            $scope.forecast.weekdays.day = [];

            for(var i=1; i < data.list.length; i++) {
              $scope.forecast.weekdays.day.push({
                 name: moment.unix(data.list[i].dt).format('dddd'),
                 temp: {
                   max: Math.floor(data.list[i].temp.max),
                   min: parseInt(data.list[i].temp.min)
                 },
                 weather: {
                   icon: WeatherIconService(data.list[i].weather[0].id),
                 }
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
         $scope.weather.today = moment().format('llll');
         $scope.weather.description = data.weather[0].description;

         var weatherId = data.weather[0].id;
         $scope.weather.icon = WeatherIconService(weatherId);
       });

       WeatherService.forecast.byPosition(position.coords.latitude, position.coords.longitude).then(function(data){
         $scope.forecast = data;
         $scope.forecast.day = moment().format('dddd [, Today]');
         $scope.forecast.weekdays = {};
         $scope.forecast.weekdays.day = [];

         for(var i=1; i < data.list.length; i++) {
           $scope.forecast.weekdays.day.push({
              name: moment.unix(data.list[i].dt).format('dddd'),
              temp: {
                max: Math.floor(data.list[i].temp.max),
                min: parseInt(data.list[i].temp.min)
              },
              weather: {
                icon: WeatherIconService(data.list[i].weather[0].id),
              }
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