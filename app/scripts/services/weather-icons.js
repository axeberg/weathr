'use strict';

angular.module('weathrApp')
  .factory('WeatherIconService', function () {
    return function(cod) {
      switch(cod) {
        /* Thunderstorm
        *  http://bugs.openweathermap.org/projects/api/wiki/Weather_Condition_Codes#Thunderstorm
        */
        case 200: // thunderstorm with light rain
          return 'clouds-flash-alt'
        case 201: // thunderstorm with rain
          return 'clouds-flash-alt'
        case 202: // thunderstorm with heavy rain
          return 'clouds-flash-alt'
        case 210: // light thunderstorm
          return 'clouds-flash-alt'
        case 211: // thunderstorm
          return 'clouds-flash-alt'
        case 212: // heavy thunderstorm
          return 'clouds-flash-alt'
        case 221: // ragged thunderstorm
          return 'clouds-flash-alt'
        case 230: // thunderstorm with light drizzle
          return 'clouds-flash-alt'
        case 231: // thunderstorm with drizzle
          return 'clouds-flash-alt'
        case 232: // thunderstorm with heavy drizzle
          return 'clouds-flash-alt'
        /* Drizzle
        *  http://bugs.openweathermap.org/projects/api/wiki/Weather_Condition_Codes#Drizzle
        */
        case 300: //	 light intensity drizzle
          return 'drizzle'
        case 301: //	 drizzle
          return 'drizzle'
        case 302: // heavy intensity drizzle
          return 'drizzle'
        case 310: // light intensity drizzle rain
          return 'drizzle'
        case 311: // drizzle rain
          return 'drizzle'
        case 312: // heavy intensity drizzle rain
          return 'drizzle'
        case 313: // shower rain and drizzle
          return 'drizzle'
        case 314: // heavy shower rain and drizzle
          return 'drizzle'
        case 321: // shower drizzle
          return 'drizzle'
        /* Rain
        *  http://bugs.openweathermap.org/projects/api/wiki/Weather_Condition_Codes#Rain
        */
        case 500: //light rain
         return 'rain'
        case 501: //moderate rain
         return 'rain'
        case 502: //heavy intensity rain
         return 'rain'
        case 503: //very heavy rain
         return 'rain'
        case 504: //extreme rain
         return 'rain'
        case 511: //freezing rain
         return 'rain'
        case 520: //light intensity shower rain
         return 'rain'
        case 521: //shower rain
         return 'rain'
        case 522: //heavy intensity shower rain
         return 'rain'
        case 531: //ragged shower rain
         return 'rain'
       /* Snow
       *  http://bugs.openweathermap.org/projects/api/wiki/Weather_Condition_Codes#Snow
       */
       case 600: // light snow
         return 'snow'
       case 601: // snow
         return 'snow'
       case 602: // heavy snow
         return 'snow-heavy'
       case 611: // sleet
         return 'snow'
       case 612: // shower sleet
         return 'snow'
       case 615: // light rain and snow
         return 'snow'
       case 616: // rain and snow
         return 'snow'
       case 620: // light shower snow
         return 'snow'
       case 621: // shower snow
         return 'snow'
       case 622: // heavy shower snow
         return 'snow-heavy'
       /* Atmosphere
       *  http://bugs.openweathermap.org/projects/api/wiki/Weather_Condition_Codes#Atmosphere
       */
       case 701: // mist
         return 'mist'
       case 711: // smoke
         return 'na'
       case 721: // haze
         return 'na'
       case 731: // Sand/Dust Whirls
         return 'na'
       case 741: // Fog
         return 'fog'
       case 751: // sand
         return 'na'
       case 761: // dust
         return 'na'
       case 762: // VOLCANIC ASH
         return 'na'
       case 771: // SQUALLS
         return 'na'
       case 781: // TORNADO
         return 'na'
       /* Clouds
       *  http://bugs.openweathermap.org/projects/api/wiki/Weather_Condition_Codes#Clouds
       */
       case 800: // sky is clear
         return 'sun'
       case 801: // few clouds
         return 'cloud-sun'
       case 802: // scattered clouds
         return 'clouds'
       case 803: // broken clouds
         return 'clouds'
       case 804: // overcast clouds
         return 'cloud-sun'
        default:
          return 'na'
      }
    }
  });