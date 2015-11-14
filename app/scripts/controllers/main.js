'use strict';

/**
 * @ngdoc function
 * @name finalProjectAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the finalProjectAngularAppApp
 */
 angular.module('finalProjectAngularAppApp')
   .controller('MainCtrl', function ($scope, current, $localStorage, $window) {
     $scope.current = current.query();
     $scope.storage = $localStorage;
     console.log ($localStorage);
     $scope.ingredients = $localStorage.savedDishes.ingredients;
     $scope.refreshCurrent = function(){
         $scope.recipeResults = current.query({
             ingredient: $scope.ingredient
       });
     };
     $scope.saveRecipe = function(recipe){
       $localStorage.dish = recipe;
     };

     $scope.unsaveRecipe = function(recipe){
       console.log(recipe.ingredients);

       $localStorage.savedDishes.splice(recipe.id);

      //  $window.location.reload();
     };
   });
