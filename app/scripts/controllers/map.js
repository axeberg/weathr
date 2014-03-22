'use strict';

angular.module('weathrApp')
  .controller('MapCtrl', function($scope, $http) {
    $scope.map = {
      options: {
        streetViewControl: false,
        panControl: false
      },
      center: {
        latitude: 55.6153398,
        longitude: 12.9854959
      },
      zoom: 11
    };

  });
