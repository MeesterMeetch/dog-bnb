angular.module('auth')
  .controller('OwnerSignupCtrl', function($scope, $alert, $auth) {
    $scope.signup = function() {
      $auth.signup({
        displayName: $scope.displayName,
        email: $scope.email,
        dogsName: $scope.dogName,
        phone: $scope.phone,
        vetPhone: $scope.vetNumber,
        password: $scope.password,
        sitter: false
      }).catch(function(response) {
        if (typeof response.data.message === 'object') {
          angular.forEach(response.data.message, function(message) {
            $alert({
              content: message[0],
              animation: 'fadeZoomFadeDown',
              type: 'material',
              duration: 3
            });
          });
        } else {
          $alert({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        }
      });
    };

    $scope.sitterSignup = function() {
      console.log('IVE BEEN PRESSED');
      $auth.signup({
        displayName: $scope.displayName,
        email: $scope.email,
        phone: $scope.phone,
        rate: $scope.rate,
        address: $scope.address,
        password: $scope.password,
        sitter: true
      }).catch(function(response) {
        if (typeof response.data.message === 'object') {
          angular.forEach(response.data.message, function(message) {
            $alert({
              content: message[0],
              animation: 'fadeZoomFadeDown',
              type: 'material',
              duration: 3
            });
          });
        } else {
          $alert({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        }
      });
    };

});
