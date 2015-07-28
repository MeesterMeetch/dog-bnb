(function () {
'use strict';

  angular
    .module('map', [
      'ngRoute',
      'angularModalService',
      'ui.bootstrap'
    ])
    .config(function(uiGmapGoogleMapApiProvider, $routeProvider) {
          uiGmapGoogleMapApiProvider.configure({
          key: 'AIzaSyC33JfTi08VwXU83o8bYsAp24Y--bEg9tU',
          v: '3.17',
          libraries: 'places,weather,geometry,visualization'
      })
      $routeProvider
        .when('/', {
          templateUrl: 'views/map.html',
          controller: 'MapController'
        })
        .otherwise({
          redirectTo: '/404'
        });
      })
})();
