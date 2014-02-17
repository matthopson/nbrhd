/**
 * Created by Hunter on 2/10/14.
 */
app.controller('MapController', ['$scope', 'PropertyService', 'CategoryService', 'GeocodeService', 'FoursquareService', function ($scope, propertyService, categoryService, geocodeService, foursquareService) {
    $scope.mapOptions = {
        center: new google.maps.LatLng(35.784, -78.670),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.activeProperty;
    $scope.propertyMarker;

    $scope.$watch(function() { return propertyService.getActiveProperty(); }, function() {
        $scope.activeProperty = propertyService.getActiveProperty();
        geocodeService.geocode($scope.activeProperty.getAddress(), function(result) {
            $scope.propertyMarker = new google.maps.Marker({
                map: $scope.map,
                position: result
            });
            $scope.map.panTo(result);
        });
    });

    $scope.categories = [];

    $scope.$watch(function() { return propertyService.getActiveProperty(); },
        function() {
            var handleSuccess = function(data, status, headers, config) {
                var category = {
                    name: query,
                    recommended: [],
                    markers: []
                };

                var items = data.response.groups[0].items;
                items.forEach(function(item) {
                    category.recommended.push(item);
                    var lat = item.venue.location.lat;
                    var lng = item.venue.location.lng;
                    category.markers.push(new google.maps.Marker({
                            map: $scope.map,
                            position: new google.maps.LatLng(lat, lng)
                        }));
                    }
                );

                $scope.categories.push(category);
            };
            var handleError = function(data, status, headers, config) {
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
            };

            var categories = categoryService.getCategories();
            for (var x in categories) {
                var query = categories[x].name;
                var near = $scope.activeProperty.address;
                foursquareService.explore(query, near)
                    .success(handleSuccess)
                    .error(handleError);
            }
        }
     );

    $scope.addMarker = function($event, $params) {
        $scope.markers.push(new google.maps.Marker({
            map: $scope.map,
            position: $params[0].latLng
        }));
    };

    $scope.openPropertyInfo = function() {
        $scope.propertyInfoWindow.open($scope.map, $scope.propertyMarker);
    };


    $scope.openVenueInfo = function(marker, item) {
        $scope.currentVenue = item.venue;
        $scope.currentMarker = marker;
        $scope.currentMarkerLat = marker.getPosition().lat();
        $scope.currentMarkerLng = marker.getPosition().lng();
        $scope.venueInfoWindow.open($scope.map, marker);
    };
    $scope.setMarkerPosition = function(marker, lat, lng) {
        marker.setPosition(new google.maps.LatLng(lat, lng));
    };
}]);