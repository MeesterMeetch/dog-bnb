angular.module('profile')
  .factory('Account', function($http, $rootScope) {
    return {
      getProfile: function() {
        return $http.get('/api/me');
      },
      updateProfile: function(profileData) {
        return $http.put('/api/me', profileData);
      },
      deleteProfile: function(profileData) {
        return $http.delete('/api/me');
      },
      addSitter: function (user) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({address: user.sitterLocation.address}, function (result) {
          user.sitterLocation.coords = {
            latitude: result[0].geometry.location.lat(),
            longitude: result[0].geometry.location.lng()
          };
          console.log('user INSIDE', user);

          return $http.put('/api/me', user).then(function (data) {
            console.log('hello, user data', data);
            $rootScope.$broadcast('sitterCoords:added');
          });
        });
      }
    };
  });
