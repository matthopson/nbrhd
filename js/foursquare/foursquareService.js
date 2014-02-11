/**
 * Created by Hunter on 2/9/14.
 */
var fsqClientId = 'AMFGJEYTCZN2VN3X2TOLCZXBWQVECILMTOOXOPS3EF1POVZD';
var fsqClientSecret = 'KVFGW5X22IFNKPYSOGRUORKEGLUNPO3AA3SXN2AU4AGH4RR2';

services
    .service('foursquareService', ['$http', function($http) {
        var explore = function(query) {
            $http
            .get("https://api.foursquare.com/v2/venues/explore",
                {
                    v: 20140209,
                    client_id: fsqClientId,
                    client_secret: fsqClientSecret,
                    near: $scope.destination,
                    limit: 50,
                    time: 'any',
                    day: 'any',
                    query: query
                }
            )
            .success(function(data, status, headers, config) {
                    var category = {
                        name: query,
                        recommended: []
                    };
                    var items = data.response.groups[0].items;
                    items.forEach(function(item) {
                        category.recommended.push({
                            result: item,
                            latitude: item.venue.location.lat,
                            longitude: item.venue.location.lng
                        });
                    });
                    return category;

                }
            ).error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                }
            );
        };
    }]);