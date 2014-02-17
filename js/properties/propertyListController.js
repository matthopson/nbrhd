/**
 * Created by Hunter on 2/9/14.
 */
'use strict';

/* Controllers */

controllers
    .controller('PropertyListController', ['$scope', '$modal', 'PropertyService', function($scope, $modal, propertyService) {
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


        $scope.openPropertyDetailModal = function (property) {
            var modalInstance = $modal.open({
                templateUrl: 'partials/property_detail_modal.html',
                controller: 'PropertyDetailModalController',
                resolve: {
                    items: function () {
                        return property;
                    }
                }
            });

            modalInstance.result.then(function (property) {
                $scope.addProperty(property);
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }]);