var app = angular.module("app", []);


var MainController = function($scope, $http) {

  var onUsersComplete = function(response) {
    $scope.users = response.data;
  };

  var onError = function(reason) {
    $scope.error = "Could not fetch the data.";
  };

  $scope.getUsers = function(){
      $http.get("http://jsonplaceholder.typicode.com/users/")
        .then(onUsersComplete, onError);
  };

};

app.controller("MainController", ["$scope", "$http", MainController]);
