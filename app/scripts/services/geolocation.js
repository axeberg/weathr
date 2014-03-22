'use strict';

angular.module('weathrApp')
  .factory("GeolocationService", function($q, $window, $rootScope) {
    return function() {
      var deferred = $q.defer();

      if (!$window.navigator) {
        deferred.reject("Geolocation is not supported");
      } else {
        $window.navigator.geolocation.getCurrentPosition(function(position) {
          $rootScope.$apply(function() {
            deferred.resolve(position);
          });
        });
      }

      return deferred.promise;
    }
  });
