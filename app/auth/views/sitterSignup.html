angular.module('auth')
  .controller('SitterSignupCtrl', function($scope, $alert, $auth) {
    $scope.sitterSignup = function() {
      $auth.signup({
        displayName: $scope.displayName,
        email: $scope.email,
        phone: $scope.phone,
        rate: $scope.rate,
        address: $scope.address,
        availability: $scope.availability,
        password: $scope.password,
        isSitter: true
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
