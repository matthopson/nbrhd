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
        geocodeService.geocode($scope.activeProperty.address, function(result) {
            $scope.propertyMarker = new google.maps.Marker({
                map: $scope.map,
                position: result
            });
            $scope.map.panTo(result);
        });
    });

    $scope.categories;

    $scope.$watch(function() { return propertyService.getActiveProperty(); }, function() {
        var categories = categoryService.getCategories();
        for(var c in categories) {
            var query = categories[c].name;
            var near = $scope.activeProperty.address;
            var category = foursquareService.explore(query, near);
        }
    });

    $scope.addMarker = function($event, $params) {
        $scope.markers.push(new google.maps.Marker({
            map: $scope.map,
            position: $params[0].latLng
        }));
    };

    $scope.openMarkerInfo = function(marker) {
        $scope.currentMarker = marker;
        $scope.currentMarkerLat = marker.getPosition().lat();
        $scope.currentMarkerLng = marker.getPosition().lng();
        $scope.infoWindow.open($scope.map, marker);
    };

    $scope.setMarkerPosition = function(marker, lat, lng) {
        marker.setPosition(new google.maps.LatLng(lat, lng));
    };
}]);