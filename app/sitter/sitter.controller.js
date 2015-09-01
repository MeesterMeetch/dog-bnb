(function() {
  'use strict';
  angular
    .module('sitter')
    .controller('SitterController', function(
      SitterService,
      $scope,
      $rootScope,
      $auth,
      $alert,
      $modal,
      $location,
      uiGmapGoogleMapApi) {

      $scope.map = {
        center: {
          latitude: 32.7833,
          longitude: -79.931051
        },
        zoom: 10,
        scrollwheel: false
      };

      SitterService.getSitters().then(function(sitters) {
        $scope.sitters = sitters.data;
      });

      $scope.showMe = function() {
         $scope.show = true;
       };
       $scope.hideMe = function() {
         $scope.show = false;
       };

       $scope.getSitter = function(id) {
          console.log('I am in the sitter controller function', id);
          SitterService.getSitter(id).then(function(sitter) {
            console.log('sitter in controller after get', sitter);
            $scope.sitterDetails = sitter.data;
            console.log('$scope.sitterDetails', $scope.sitterDetails);
          });
          $location.path('/sitters/' + id);
        };

    });
}());
