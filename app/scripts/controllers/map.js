'use strict';

angular.module('weathrApp')
  .controller('MapCtrl', function($scope, $http, GeolocationService) {
    google.maps.visualRefresh = true;

    GeolocationService().then(function(position) {
      $scope.position = position;
    });

    $scope.map = {
      control: {},
      showWeather: true,
      center: {
        latitude: 55.6153398,
        longitude: 12.9854959
      },
      zoom: 11
    };

  });