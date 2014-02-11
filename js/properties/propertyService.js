/**
 * Created by Hunter on 2/9/14.
 */
'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
services
    .service('PropertyService', [function() {
        var properties = [];
        var activeProperty;

        this.getProperties = function() {
            return properties;
        };

        this.addProperty = function(address) {
            properties.push({address: address});
            if (properties.length == 1) {
                activeProperty = properties[0];
            }
        };

        this.removeProperty = function(property) {
            var newProperties = properties.filter(function(p) {
                return p != property;
            });
            properties = newProperties;
        };

        this.getActiveProperty = function() {
            return activeProperty;
        };

        this.setActiveProperty = function(property) {
            activeProperty = property;
        };
    }]);
