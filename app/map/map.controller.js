(function() {

  angular
    .module('map')
    .controller('MapController', function($rootScope, $scope, uiGmapGoogleMapApi, MapService, $auth, $modal, $log) {
      // Do stuff with $scope.

      $scope.map = {
          center: {
              latitude: 38.8833,
              longitude: -97.0167
          },
          zoom: 4,
          showTraffic: false,
          coords: [],
          markers: [
          ],
          maxZoom: function(map) {
            var maxZoom = 13;
            if (map.getZoom() > maxZoom) { map.setZoom(maxZoom) };
          },
          events: {
            dblclick: function (map, eventName, originalEventArgs) {
                var e = originalEventArgs[0];
                var lat = e.latLng.lat(), lon = e.latLng.lng();
                var marker = {
                    id: Date.now(),
                    coords: {
                        latitude: lat,
                        longitude: lon
                    },
                    options: {
                      animation: api.Animation.DROP,
                    }
                  };
                $scope.map.markers.unshift(marker);
                $scope.$apply();
                console.log($scope.map.markers);
                var element = angular.element(document.querySelector('.reviews'));
                element.addClass('hide');
                var secondElement = angular.element(document.querySelector('.reviewForm'));
                secondElement.removeClass('hide');
            },
            zoom_changed: function (map, eventName, originalEventArgs) {
                $scope.map.maxZoom(map)
            }

          }
        }

        $scope.clickMarker = function(marker) {
          MapService.getSingleReview().success(function(reviews){
            console.log(_.findWhere(reviews, {'latitude': marker.coords.latitude}));
            $rootScope.individMarker = _.findWhere(reviews, {'latitude': marker.coords.latitude});
            $scope.open('lg');
            console.log($scope.individMarker);
            return _.findWhere(reviews, {'latitude': marker.coords.latitude});
          });
        }

        $scope.windowOptions = {
          visible: false
        };

        MapService.getMarkers().then(function(marker) {
          for (var i = 0; i < marker.length; i++) {
            $scope.map.markers.push(marker[i].coords);
          }
        });

        $scope.reloadMap = function() {
          MapService.getMarkers().then(function(marker) {
              $scope.map.markers = []
            for (var i = 0; i < marker.length; i++) {
              $scope.map.markers.push(marker[i].coords);
            }
          });
        }

        $scope.isAuthenticated = function() {
          return $auth.isAuthenticated();
        };

        $scope.onClick = function() {
          $scope.windowOptions.visible = !$scope.windowOptions.visible;
        };
        $scope.closeClick = function() {
          $scope.windowOptions.visible = false;
        };

        var events = {

        places_changed: function (searchBox) {
        var place = searchBox.getPlaces();
        if (!place || place == 'undefined' || place.length == 0) {
            alert('Sorry that doesnt exist');
            return;
        }

        $scope.map = {
            center: {
                latitude: place[0].geometry.location.lat(),
                longitude: place[0].geometry.location.lng()
            },
            zoom: 7,
            coords: [],
            markers: [],
            maxZoom: function(map) {
              var maxZoom = 13;
              if (map.getZoom() > maxZoom) { map.setZoom(maxZoom) };
            },
            events: {
              dblclick: function (map, eventName, originalEventArgs) {
                  var e = originalEventArgs[0];
                  var lat = e.latLng.lat(), lon = e.latLng.lng();
                  var marker = {
                      id: Date.now(),
                      coords: {
                          latitude: lat,
                          longitude: lon
                      },
                      options: {
                        animation: api.Animation.DROP,
                      }
                  };

                  $scope.map.markers.unshift(marker);
                  $scope.$apply();
                  console.log($scope.map.markers);
                  var element = angular.element(document.querySelector('.reviews'));
                  element.addClass('hide');
                  var secondElement = angular.element(document.querySelector('.reviewForm'));
                  secondElement.removeClass('hide');
              },
              zoom_changed: function (map, eventName, originalEventArgs) {
                  $scope.map.maxZoom(map)
              }
            }
          };
          MapService.getMarkers().then(function(marker) {
            for (var i = 0; i < marker.length; i++) {
              console.log(marker[i].title);
              $scope.title = marker[i].title;
              $scope.map.markers.push(marker[i].coords);
            }
          });

          $scope.reloadMap = function() {
            MapService.getMarkers().then(function(marker) {
                $scope.map.markers = []
              for (var i = 0; i < marker.length; i++) {
                $scope.map.markers.push(marker[i].coords);
              }
            });
          }

          $scope.isAuthenticated = function() {
            return $auth.isAuthenticated();
          };
        }
      };

      $scope.searchbox = {
        template: 'searchbox.tpl.html',
        events: events
        };

        var api;
        uiGmapGoogleMapApi.then(function(googleMaps) {
          api = googleMaps;
        });

        uiGmapGoogleMapApi.then(function(maps) {

        });

        var watchCallback = function() {
          console.log("hello from maps");
        }

        $scope.$on('review:created', watchCallback);


      $scope.animationsEnabled = true;

      $scope.open = function (size) {

      console.log('hi');

      var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '../reviews/views/modal.html',
        controller: 'ModalInstanceCtrl',
        size: size
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

  })

    .controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

      $scope.close = function () {
        $modalInstance.close($scope.selected);
      };

    });

})();
