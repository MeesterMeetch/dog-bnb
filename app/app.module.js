angular.module('MyApp', [
  'ngMessages',
  'ngRoute',
  'ngSanitize',
  'mgcrea.ngStrap',
  'auth',
  'home',
  'profile',
  'posts',
  'sitter',
  'ui.bootstrap',
  'uiGmapgoogle-maps',
])

.config(function($routeProvider) {
  $routeProvider
    .when('/404', {
      template: '<h1>Sorry, page not found</h1>'
    })
    .otherwise({
      redirectTo: '/404'
    });
});


// angular.module('MyApp', [
//   'ngMessages',
//   'ngRoute',
//   'ngSanitize',
//   'mgcrea.ngStrap',
//   'auth',
//   'profile',
//   'home',
//   'myReviews',
//     'lodash',
//   // 'reviews',
//     // 'map',
//   'uiGmapgoogle-maps'
//
// ])
//
// .config(function($routeProvider) {
//   $routeProvider
//     .when('/', {
//       templateUrl: 'home/views/home.html'
//     })
//     .when('/404', {
//       template: '<h1>Sorry, page not found</h1>'
//     })
//     .otherwise({
//       redirectTo: '/404'
//     });
// });
// angular
//     .module('lodash', [])
//     .factory('_', function($window) {
//       return $window._;
//     });
