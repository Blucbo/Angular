

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
    let a =
            Math.sin((geo.lat-$scope.lat)*Math.PI/180/2) *
            Math.sin((geo.lat-$scope.lat)*Math.PI/180/2) +
            Math.cos($scope.lat*Math.PI/180) * Math.cos(geo.lat*Math.PI/180) *
            Math.sin((geo.lng-$scope.lng)*Math.PI/360) * Math.sin((geo.lng-$scope.lng)*Math.PI/360);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    let d = Math.floor(6371 * c);
    return d;
  }

  $scope.usersSortOrder = "+name";
};

app.controller("MainController", ["$scope", "$http", MainController]);
