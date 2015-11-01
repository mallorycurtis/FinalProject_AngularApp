'use strict';

/**
 * @ngdoc service
 * @name finalProjectAngularAppApp.current
 * @description
 * # current
 * Factory in the finalProjectAngularAppApp.
 */
angular.module('finalProjectAngularAppApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.yummly.com/v1/api/recipes?_app_id=27e808b3&_app_key=0c75275d5a1a174629e2a8acbd502e57&q=:ingredient&requirePictures=true', {}, {
      query: {
        method:'GET',
        params:{
          ingredient: ''
        },
        isArray:false
    }
  });
});
