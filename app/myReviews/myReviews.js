angular.module('myReviews', ['ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
  .config(function($routeProvider, $authProvider) {
    $routeProvider
      .when('/myReviews', {
        templateUrl: 'myReviews/views/myreviews.html',
        controller: 'ReviewsController',
        resolve: {
          authenticated: function($q, $location, $auth) {
            var deferred = $q.defer();
            if (!$auth.isAuthenticated()) {
              $location.path('/login');
            } else {
              deferred.resolve();
            }
            return deferred.promise;
          }
        }
      });
  });
