var app = angular.module( 'warmup', [] );

app.controller('myController', [ '$scope', 'users', function($scope, users) {
    $scope.greet = function(somebody) {
      if (somebody)
        return "Hello " + somebody + "!!!";
      else 
        return "...";
    }

}]);

app.factory('users', [ '$http', function users($http) {
  var userPromise = $http.jsonp('/users.json').success( function(data) {
      console.log( data );
    });
 return { users: userPromise }
}]);
