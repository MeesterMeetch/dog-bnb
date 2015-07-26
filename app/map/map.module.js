(function () {
  'use strict';
angular.module('map', [
  'ngRoute',
  'uiGmapgoogle-maps'

])

.config(function($routeProvider, uiGmapGoogleMapApiProvider) {
  // $routeProvider
  //   .when('/places', {
  //     templateUrl: 'places/views/list.html',
  //     controller: 'PlacesController'
  //   })
  //   .when('/places/:placeId', {
  //     templateUrl: 'places/views/detail.html',
  //     controller: 'PlacesController'
  //   })
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBid1vMLnsiE5m40snerzPpKlMsLaxAIyU',
        v: '3.17',
        libraries: 'weather,geometry,visualization,places'
    });
  });



})();
