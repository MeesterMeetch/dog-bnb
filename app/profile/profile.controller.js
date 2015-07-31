angular.module('profile')
  .controller('ProfileController', function($scope, $rootScope, $auth, $alert, $modal, Account) {

    /**
     * Get user's profile information.
     */
    $scope.getProfile = function() {
      Account.getProfile()
        .success(function(data) {
          $scope.user = data;
          $rootScope.username = data.username;
          // dogsName = data.dogsName;
          // phone = data.phone;
          // vetPhone = data.vetPhone;
          // sitter = data.sitter;
          // address = data.address;
          // rate = data.rate;
          // picture = data.picture;
          // availability = data.availability;
          // sitterLocation = {address: data.address, coords: {latitude: '', longitude: ''}};
          // testing
          $rootScope.dogsName = data.dogsName;
          $rootScope.phone = data.phone;
          $rootScope.vetPhone = data.vetPhone;
          $rootScope.sitter = data.sitter;
          $rootScope.address = data.address;
          $rootScope.rate = data.rate;
          $rootScope.picture = data.picture;
          $rootScope.availability = data.availability;
          $rootScope.sitterLocation = {address: data.address, coords: {latitude: '', longitude: ''}};
        })
        .error(function(error) {
          $modal.open({
            content: error.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };


   $scope.logProfile = function () {
     console.log($scope.user.displayName);
    //  return $scope.user.displayName + "";
   };


    /**
     * Update user's profile information.
     */
    $scope.updateProfile = function() {
      var user = $scope.user;
      // Account.addSitter(user);

      Account.updateProfile({
        displayName: $scope.user.displayName,
        email: $scope.user.email,
        dogsName: $scope.user.dogsName,
        phone: $scope.user.phone,
        vetPhone: $scope.user.vetPhone,
        sitter: $scope.user.sitter,
        address: $scope.user.address,
        rate: $scope.user.rate,
        picture: $scope.user.picture,
        availability: $scope.user.availability,
        sitterLocation: {address: $scope.user.address, coords: {latitude: '', longitude: ''}}
      }).success(function() {
        console.log("SUCCESSFUL THINGS");
        $alert({
          content: 'Profile has been updated',
          animation: 'fadeZoomFadeDown',
          type: 'material',
          duration: 3
        });
        // }).error(function(err) {
        //   console.log('I HAVE BUBBLED UP', err);
        // });
      });
    };

    /**
     * Link third-party provider.
     */
    $scope.link = function(provider) {
      $auth.link(provider)
        .then(function() {
          $alert({
            content: 'You have successfully linked ' + provider + ' account',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        })
        .then(function() {
          $scope.getProfile();
        })
        .catch(function(response) {
          $alert({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };

    /**
     * Unlink third-party provider.
     */
    $scope.unlink = function(provider) {
      $auth.unlink(provider)
        .then(function() {
          $alert({
            content: 'You have successfully unlinked ' + provider + ' account',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        })
        .then(function() {
          $scope.getProfile();
        })
        .catch(function(response) {
          $alert({
            content: response.data ? response.data.message : 'Could not unlink ' + provider + ' account',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };

    $scope.getProfile();

  });
