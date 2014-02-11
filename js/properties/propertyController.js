/**
 * Created by Hunter on 2/9/14.
 */
'use strict';

/* Controllers */

controllers
    .controller('PropertyController', ['$scope', 'PropertyService', function($scope, propertyService) {
        $scope.$watch(function() { return propertyService.getProperties(); }, function() {
            $scope.properties = propertyService.getProperties();
        });

        $scope.addProperty = function(address) {
            propertyService.addProperty(address);
        };

        $scope.removeProperty = function(property) {
            propertyService.removeProperty(property);
        };

        $scope.setActiveProperty = function(property) {
            propertyService.setActiveProperty(property);
        };
    }]);