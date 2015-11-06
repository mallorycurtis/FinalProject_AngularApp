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
    $scope.id = $scope.storage.dish.id;
    $scope.ingredients = $scope.storage.dish.ingredients;
    if (!$localStorage.savedDishes) {
      $localStorage.savedDishes = [];
    }
    $scope.myRecipe = function (dish){
      var dishData = {
        'name': dish.id,
      };
      if (!$localStorage.savedRecipes){
          $localStorage.savedRecipes = [dishData];
      } else {
          // We have already saved some cities.
          // Check to make sure we haven't already saved the current city.
          var save = true; // Initialize the save decision variable.
          // Use this loop to check if we've already saved the city.
          for (var i=0; i < $localStorage.savedRecipes.length; i++){
              if ($localStorage.savedRecipes[i].name === dishData.name) {
                  // This is a duplicate, so don't save (variable set to false).
                  save = false;
              }
          }
          if (save===true){
              $localStorage.savedRecipes.push(dishData);
          } else {
              console.log('Already saved');
          }
      }
    };

    $scope.addTo = function(){
      $localStorage.savedDishes.push($localStorage.dish);
    };

});
