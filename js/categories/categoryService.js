/**
 * Created by Hunter on 2/9/14.
 */
'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
services
    .service('CategoryService', [function() {
        var categories = [{name: 'Thai'}];

        this.getCategories = function() {
            return categories;
        };

        this.addCategory = function(name) {
            categories.push({name: name});
        };

        this.removeCategory = function(category) {
            var newCategories = categories.filter(function(c) {
                return c != category;
            });
            categories = newCategories;
        };
    }]);
