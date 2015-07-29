angular.module('home', [])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home/views/home.html',
      controller: 'HomeController'
    });
});
