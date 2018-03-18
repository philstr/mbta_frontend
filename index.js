var app = angular.module('mbtaApp', []);
var apiUrl = "localhost"

app.controller('appController', function($scope) {

  $scope.name= "John";

  $scope.outbound = true;

  $scope.changeDirection = function() {
    $scope.outbound = !$scope.outbound;
  }

  // $scope.updatePredictions = function() {
  //   let trainPrediction = retrieveNextPredicted()
  // }

});

// function retrieveNextPredicted() {
//   let responses = whatever // call getNextPredicted or something (maybe some n=1 thing)
// }

// functino retrieveNextScheduled() {
//   let responses = whatever; // same as predicted one
// }

