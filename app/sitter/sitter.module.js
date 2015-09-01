(function() {
  'use strict';
  angular
  .module('sitter', ['ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
    .config(function($routeProvider, $authProvider) {
      $routeProvider
        .when('/sitters', {
          templateUrl: 'sitter/views/list.html',
          controller: 'SitterController',
        });
        $routeProvider
          .when('/sitters/:_id', {
            templateUrl: 'sitter/views/detail.html',
            controller: 'SitterController',
          });
    });
}());
