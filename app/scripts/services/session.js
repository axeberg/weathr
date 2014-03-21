'use strict';

angular.module('weathrApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
