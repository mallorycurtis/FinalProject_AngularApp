'use strict';

/**
 * @ngdoc function
 * @name finalProjectAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the finalProjectAngularAppApp
 */
 angular.module('finalProjectAngularAppApp')
   .controller('MainCtrl', function ($scope, current, $localStorage) {
     $scope.current = current.query();
     $scope.storage = $localStorage;
     console.log ($localStorage);
     $scope.refreshCurrent = function(){
         $scope.recipeResults = current.query({
             ingredient: $scope.ingredient
       });
     };
     $scope.saveRecipe = function(recipe){
       $localStorage.dish = recipe;
     };
   });
