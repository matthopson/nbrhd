/**
 * Created by Hunter on 2/9/14.
 */

services
    .service('FoursquareService', ['$http', function($http) {
        return FoursquareService.FoursquareModule($http);
    }]);

var FoursquareService = FoursquareService || {};

FoursquareService.FoursquareModule = function($http) {
    var fsqClientId = 'AMFGJEYTCZN2VN3X2TOLCZXBWQVECILMTOOXOPS3EF1POVZD';
    var fsqClientSecret = 'KVFGW5X22IFNKPYSOGRUORKEGLUNPO3AA3SXN2AU4AGH4RR2';

    var requiredParams = '?v=20140215' +
        '&client_id=' + fsqClientId +
        '&client_secret=' + fsqClientSecret;

    var exploreUrl = 'https://api.foursquare.com/v2/venues/explore';
    var explore = function(query, near) {
        var request = exploreUrl +
            requiredParams +
            '&near=' + near +
            '&limit=' + 10 +
            '&time=' + 'any' +
            '&day=' + 'any' +
            '&query=' + query;
        return $http.get(request);
    };

    return {
        explore: explore
    };
};