/**
 * Created by Hunter on 2/9/14.
 */
'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
services
    .service('PropertyService', [function() {
        return PropertyService.PropertyModule();
    }]);

var PropertyService = PropertyService || {};

PropertyService.PropertyModule = function() {
    var properties = [];
    var activeProperty = null;

    var getProperties = function() {
        return properties;
    };

    var addProperty = function(property) {
        properties.push(property);
        if (properties.length == 1) {
            activeProperty = properties[0];
        }
    };

    var removeProperty = function(property) {
        var newProperties = properties.filter(function(p) {
            return p != property;
        });
        properties = newProperties;
    };

    var getActiveProperty = function() {
        return activeProperty;
    };

    var setActiveProperty = function(property) {
        activeProperty = property;
    };

    return {
        getProperties: getProperties,
        addProperty: addProperty,
        removeProperty: removeProperty,
        getActiveProperty: getActiveProperty,
        setActiveProperty: setActiveProperty
    };
};