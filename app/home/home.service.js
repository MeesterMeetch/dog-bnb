(function() {
  'use strict';
  angular
  .module('home')
  .factory('HomeService', function($http, $routeParams) {

  var getProfile = function() {
    return $http.get('/api/me');
  };

  var getSitters = function() {
    console.log("Obtaining Sitters (from home.service)!!!!!!!!!");
    return $http.get('/api/allUsers');
  };

  return {
    getProfile: getProfile,
  };
});

}());
