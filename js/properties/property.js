/**
 * Created by Hunter on 2/16/14.
 */
var Property = Property || {};

Property.create = function(spec) {
    var that = {};

    var street = spec.street;
    var city = spec.city;
    var state = spec.state;
    var bedrooms = spec.bedrooms;
    var bathrooms = spec.bathrooms;
    var rent = spec.rent;
    var url = spec.url;

    that.street = street;
    that.city = city;
    that.state = state;
    that.bedrooms = bedrooms;
    that.bathrooms = bathrooms;
    that.rent = rent;
    that.url = url;

    var getAddress = function() {
        return that.street + ', ' + that.city + ', ' + that.state;
    };

    that.getAddress = getAddress;

    return that;
};