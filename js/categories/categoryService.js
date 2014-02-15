/**
 * Created by Hunter on 2/9/14.
 */
'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
services
    .service('CategoryService', [function() {
        return CategoryService.CategoryModule();
    }]);

var CategoryService = CategoryService || {};

CategoryService.CategoryModule = function() {
    var categories = [{name: 'Thai'}];

    var getCategories = function() {
        return categories;
    };

    var addCategory = function(name) {
        categories.push({name: name});
    };

    var removeCategory = function(category) {
        var newCategories = categories.filter(function(c) {
            return c != category;
        });
        categories = newCategories;
    };

    return {
        getCategories: getCategories,
        addCategory: addCategory,
        removeCategory: removeCategory
    };
};