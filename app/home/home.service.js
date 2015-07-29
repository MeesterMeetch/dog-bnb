(function() {
  'use strict';
  angular
  .module('home')
  .factory('HomeService', function($http, $routeParams) {

  var getProfile = function() {
    return $http.get('/api/me');
  };

  return {
    getProfile: getProfile,
  };
});

}());
