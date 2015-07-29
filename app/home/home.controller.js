// (function() {
//   'use strict';
//     angular
//     .module('home')
//     .controller('HomeController', function(HomeService, Account, $scope, $rootScope, $location, $routeParams, $auth) {
//         $scope.map = {
//           center: {
//             latitude: 32.7833,
//             longitude: -79.931051
//           },
//           zoom: 10,
//           scrollwheel: false
//         };
//
//       new  HomeService().then(function(sitters) {
//           console.log("Obtaining Sitters!!!!!!!!!!");
//           console.log(sitters.data);
//           $scope.sitters = sitters.data
//         })
//     });
// }());


(function() {
  'use strict';
    angular
    .module('home')
    .controller('HomeController', function(HomeService, Account, $scope, $rootScope, $location, $routeParams, $auth) {
        $scope.map = {
          center: {
            latitude: 34.80,
            longitude: -80.50
          },
          zoom: 15,
          scrollwheel: false
        };
    });
}());
