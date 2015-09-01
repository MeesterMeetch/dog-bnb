(function() {
  'use strict';
  angular
  .module('home')
  .factory('HomeService', function($http, $routeParams) {

  var getSitters = function() {
    return $http.get('/api/sitters');
  };

  var getProfile = function() {
    return $http.get('/api/me');
  };

  var getAllSitters = function() {
    return $http.get('/api/allSitters');
  };

  return {
    getSitters: getSitters,
    getProfile: getProfile,
    allSitters: getAllSitters
  };
});

}());
