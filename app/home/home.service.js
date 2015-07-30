(function() {
  'use strict';
  angular
  .module('home')
  .factory('HomeService', function($http, $routeParams) {

  var getProfile = function() {
    return $http.get('/api/me');
  };

  var getAllSitters = function() {
    return $http.get('/allUsers');
  };

  return {
    getProfile: getProfile,
    getAllSitters: getAllSitters
  };
});

}());
