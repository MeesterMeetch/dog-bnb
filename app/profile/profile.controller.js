angular.module('profile')
  .controller('ProfileController', function($scope, $rootScope, $auth, $alert, $modal, Account, $http) {


    Account.getAllSitters()
      .success(function(data) {
        $scope.users = data;
        console.log('users:', data);
      })
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


  //  $scope.logProfile = function () {
  //    console.log($scope.user.displayName);
  //   //  return $scope.user.displayName + "";
  //  };


    /**
     * Update user's profile information.
     */
    $scope.updateProfile = function() {
      var user = $scope.user;

      if (user.sitter === true) {
        $scope.convertAddressToCoords($scope.user.sitterLocation.address).success(function(googleObj) {
          Account.addSitter(user);

          Account.updateProfile({
            displayName: $scope.user.displayName,
            // username: $scope.user.username,
            email: $scope.user.email,
            dogsName: $scope.user.dogsName,
            phone: $scope.user.phone,
            vetPhone: $scope.user.vetPhone,
            // sitter: $scope.user.sitter,
            address: $scope.user.address,
            sitterDescription: $scope.user.sitterDescription,
            rate: $scope.user.rate,
            picture: $scope.user.picture,
            availability: $scope.user.availability,
            sitterLocation: {address: $scope.user.sitterLocation.address, coords: {latitude: googleObj.results[0].geometry.location.lat, longitude: googleObj.results[0].geometry.location.lng}}
        })
      })
      } else {

      Account.addSitter(user);

      Account.updateProfile({
        displayName: $scope.user.displayName,
        username: $scope.user.username,
        // username: $scope.user.username,
        email: $scope.user.email,
        dogsName: $scope.user.dogsName,
        phone: $scope.user.phone,
        vetPhone: $scope.user.vetPhone,
        sitter: $scope.user.sitter,
        // sitter: $scope.user.sitter,
        address: $scope.user.address,
        sitterDescription: $scope.user.sitterDescription,
        rate: $scope.user.rate,
        picture: $scope.user.picture,
        availability: $scope.user.availability,
        sitterLocation: {address: $scope.user.sitterLocation.address, coords: {latitude: googleObj.results[0].geometry.location.lat, longitude: googleObj.results[0].geometry.location.lng}}
      }).success(function() {
        console.log("SUCCESSFUL THINGS");

        $alert({
            content: 'Profile has been updated',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
      }
    };

    $scope.convertAddressToCoords = function(address) {
      console.log("ADDRESS", address);
      var regexAddress = address.replace(/\s/ig, "+");
      return $http.get('/api/getCoords/' + regexAddress);
    }

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
