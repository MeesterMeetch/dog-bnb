angular.module('sitter')
  .factory('SitterService', function($http, $rootScope) {

    return {

      getSitters: function() {
        return $http.get('/api/sitters')
      },

      getSitter: function(id) {
        console.log('Im in the getSitter Service', id);
        return $http.get('/api/sitter/' + id);
      },


      addSitter: function (user) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({address: user.sitterLocation.address}, function (result) {
          user.sitterLocation.coords = {
            latitude: result[0].geometry.location.lat(),
            longitude: result[0].geometry.location.lng()
          };
          console.log('USERS INSIDE', user);

          return $http.put('/api/me', user).then(function (data) {
            console.log('hello, user data', data);
            $rootScope.$broadcast('sitterCoords:added');
          });
        });
      }
    };

  });
