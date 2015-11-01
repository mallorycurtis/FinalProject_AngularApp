'use strict';

/**
 * @ngdoc function
 * @name finalProjectAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the finalProjectAngularAppApp
 */
 angular.module('finalProjectAngularAppApp')
   .controller('MainCtrl', function ($scope, current) {
     $scope.current = current.query();
     $scope.refreshCurrent = function(){
         $scope.recipeResults = current.query({
             ingredient: $scope.ingredient
       });
     };
   });
