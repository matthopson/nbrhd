/**
 * Created by Hunter on 2/10/14.
 */
app.controller('MapController', ['$scope', 'PropertyService', 'CategoryService', 'GeocodeService', function ($scope, propertyService, categoryService, geocodeService) {
    $scope.propertyMarker;

    $scope.mapOptions = {
        center: new google.maps.LatLng(35.784, -78.670),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.$watch(function() { return propertyService.getActiveProperty(); }, function() {
        var activeProperty = propertyService.getActiveProperty();
        geocodeService.geocode(activeProperty.address, function(result) {
            $scope.propertyMarker = new google.maps.Marker({
                map: $scope.map,
                position: result
            });
            $scope.map.panTo(result);
        });
    });

    $scope.addMarker = function($event, $params) {
        $scope.markers.push(new google.maps.Marker({
            map: $scope.map,
            position: $params[0].latLng
        }));
    };

    $scope.setZoomMessage = function(zoom) {
        $scope.zoomMessage = 'You just zoomed to '+zoom+'!';
        console.log(zoom,'zoomed')
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