(function () {
  'use strict';
angular.module('map', [
  'ngRoute',
  'uiGmapgoogle-maps'

])

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBid1vMLnsiE5m40snerzPpKlMsLaxAIyU',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
})
.controller("mapController", function($scope, uiGmapGoogleMapApi) {
    // Do stuff with your $scope.
    $scope.map = {center: {latitude: 45, longitude: -73}, zoom: 8};
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

    });
});


})();
