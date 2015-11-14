'use strict';

/**
 * @ngdoc service
 * @name finalProjectAngularAppApp.scroller
 * @description
 * # scroller
 * Factory in the finalProjectAngularAppApp.
 */
angular.module('finalProjectAngularAppApp')
.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.gotoBottom = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');

      // call $anchorScroll()
      $anchorScroll();
    };
  }]);
