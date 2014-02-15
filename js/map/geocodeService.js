/**
 * Created by Hunter on 2/9/14.
 */
services
    .service('GeocodeService', [function() {
        return GeocodeService.GeocodeModule();
    }]);

var GeocodeService = GeocodeService || {};

GeocodeService.GeocodeModule = function() {

    var geocoder = new google.maps.Geocoder();

    var geocode = function(address, callback) {
        geocoder.geocode({address: address},
            function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var lat = results[0].geometry.location.lat();
                    var lng = results[0].geometry.location.lng();
                    var latLng = new google.maps.LatLng(lat, lng);
                    callback.call(callback, latLng);
                } else {
                    // Error.
                }
            }
        );
    };

    return {
        geocode: geocode
    };
};