'use strict';

angular.module('weathrApp')
  .factory("WeatherService", function($q, $http) {
  var SERVICE_ENDPOINT = "http://api.openweathermap.org/data/2.5";
  var JSON_P_SUFFIX = "&callback=JSON_CALLBACK"

  var request = function(path) {
    var deferred = $q.defer();

    $http.jsonp(SERVICE_ENDPOINT + path + JSON_P_SUFFIX, {cache: true}).
      success(function(data, status, headers, config){
        deferred.resolve(data);
      }).
      error(function(data, status, headers, config){
        deferred.reject(data);
      })

    return deferred.promise;
  };

  var normalizeDays = function(days) {
    var d = days;

    if(days === undefined || days === null || parseInt(days) < 1) d = 7;
    if(d > 14) d = 14; // max 14 days

    return d;
  };

  return {
    current: {
      byPosition: function(lat, lng){
        var u = 'metric'; // internal, metric, or imperial

        var path = "/weather?lat="+lat+"&lon="+lng+"&units="+u;
        return request(path);
      },
      byCity: function(cityName){
        var u = 'metric'; // internal, metric, or imperial
        var path = "/weather?q="+cityName+"&units="+u;
        return request(path);
      },
      byCityId: function(cityId){
        var path = "/weather?id="+cityId;
        return request(path);
      }
    },
    forecast: {
      byPosition: function(lat, lng, days, units) {
        var u = 'metric'; // internal, metric, or imperial
        var d = normalizeDays(days);

        var path = "/forecast/daily?lat="+lat+"&lon="+lng+"&cnt="+d+"&mode=json"+"&units="+u;
        return request(path);
      },
      byCity: function(cityName, days, units) {
        var u = 'metric'; // internal, metric, or imperial
        var d = normalizeDays(days);

        var path = "/forecast/daily?q="+cityName+"&cnt="+d+"&mode=json"+"&units="+u;
        return request(path);
      },
      byCityId: function(cityId, days, units) {
        var u = 'metric'; // internal, metric, or imperial
        var d = normalizeDays(days);

        var path = "/forecast/daily?id="+cityId+"&cnt="+d+"&mode=json"+"&units="+u;
        return request(path);
      }
    },
    forecastHourly: {
      byPosition: function(lat, lng, days, units) {
        var u = 'metric'; // internal, metric, or imperial
        var d = normalizeDays(days);

        var path = "/forecast?lat="+lat+"&lon="+lng+"&cnt="+d+"&mode=json"+"&units="+u;
        return request(path);
      },
      byCity: function(cityName, days, units) {
        var u = 'metric'; // internal, metric, or imperial
        var d = normalizeDays(days);

        var path = "/forecast?q="+cityName+"&cnt="+d+"&mode=json"+"&units="+u;
        return request(path);
      },
      byCityId: function(cityId, days, units) {
        var u = 'metric'; // internal, metric, or imperial
        var d = normalizeDays(days);

        var path = "/forecast?id="+cityId+"&cnt="+d+"&mode=json"+"&units="+u;
        return request(path);
      }
    }
  }
});