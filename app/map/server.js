(function () {
'use strict';
  angular
        .module('map')
        .factory('MapService', function($http) {
          var reviewsUrl = "http://dog-bnb.herokuapp.com/collections/testingMapReview"

          var getMarkers = function() {
            return $http.get(reviewsUrl).then(function(reviews) {
              return reviews.data;
            })
          };

          var getSingleReview = function() {
            return $http.get(reviewsUrl).success(function(reviews) {
              return reviews;
            });
          };

          return {
            getMarkers: getMarkers,
            getSingleReview: getSingleReview
          }
    });
})();
