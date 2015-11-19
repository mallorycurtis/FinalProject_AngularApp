'use strict';

/**
 * @ngdoc function
 * @name finalProjectAngularAppApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the finalProjectAngularAppApp
 */
angular.module('finalProjectAngularAppApp')
  .controller('CurrentCtrl', function ($scope, $routeParams, current, $localStorage) {
    $scope.storage = $localStorage;
    console.log ($scope.storage.dish);
    $scope.recipeName = $scope.storage.dish.recipeName;
    $scope.ingredients = $scope.storage.dish.ingredients;
    if (!$localStorage.savedDishes) {
      $localStorage.savedDishes = [];
    }

    $scope.addTo = function(){
      $localStorage.savedDishes.push($localStorage.dish);
      $scope.recipeSaved = {
        'success':true
      };
    };

    $scope.myRecipe = function(dish){
      var recipeData = dish;
      if (!$localStorage.savedDishes) {
        $localStorage.savedDishes = [recipeData];
      } else {
        var save = true;
        for (var i=0; i < $localStorage.savedDishes.length; i++) {
          if ($localStorage.savedDishes[i].id === recipeData.id) {
            save = false;
          }
        }
        if (save===true){
          $localStorage.savedDishes.push($localStorage.dish);
          $scope.recipeSaved = {
            'success' : true
          };
        } else {
          console.log('Already Saved');
          $scope.recipeSaved = {
            'duplicate':true
          };
        }
      }
    };

});
