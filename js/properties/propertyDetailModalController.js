/**
 * Created by Hunter on 2/16/14.
 */
controllers
    .controller('PropertyDetailModalController', ['$scope', '$modalInstance', function($scope, $modalInstance, property) {
        $scope.header = property ? property.street : 'Add Property';

        $scope.property = property ? property : Property.create({});

        $scope.save = function () {
            $modalInstance.close($scope.property);
        };

        $scope.close = function () {
            $modalInstance.dismiss('close');
        };
    }]);