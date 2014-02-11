/**
 * Created by Hunter on 2/9/14.
 */
'use strict';

/* Controllers */

controllers
    .controller('CategoryController', ['$scope', 'CategoryService', function($scope, categoryService) {
        $scope.$watch(function() { return categoryService.getCategories(); }, function() {
            $scope.categories = categoryService.getCategories();
        });

        $scope.addCategory = function(name) {
            categoryService.addCategory(name);
        };

        $scope.removeCategory = function(category) {
            categoryService.removeCategory(category);
        };
    }]);