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
  navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      $scope.$apply(function(){
        $scope.lat = lat;
        $scope.lng = lng;
      });
   });
  $scope.dist = function(geo){
    
  }

  $scope.usersSortOrder = "+name";
};

app.controller("MainController", ["$scope", "$http", MainController]);
