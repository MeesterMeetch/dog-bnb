(function() {
  'use strict';
    angular
    .module('home')
    .controller('HomeController', function(HomeService, Account, $scope, $rootScope, $location, $routeParams, $auth, uiGmapGoogleMapApi) {

      $scope.markers = [];

      $scope.map = {
        center: {
          latitude: 32.792447,
          longitude: -79.936134
        },
        zoom: 10,
        scrollwheel: false,
        markers: []
      };

      console.log("center of the map err:");
        HomeService.getSitters().then(function(sitter) {
          $scope.sitters = sitter.data
          var sitters = sitter.data
          console.log('sitter.data', sitter.data);
          sitters.forEach(function(el) {
            var sitter = el;
            if (sitter.sitterLocation) {

              var marker = {
                idKey: 0,
                coords: {
                  latitude: sitter.sitterLocation.coords.latitude,
                  longitude: sitter.sitterLocation.coords.longitude
                },
                icon: "#00B800"

              };

              $scope.markers.push(marker);
              $scope.map.markers.push(marker);
            }
          })
        });

    });
}());
