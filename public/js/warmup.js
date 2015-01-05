var app = angular.module( 'warmup', ['ngRoute'] );

app.config( [ '$routeProvider', function($routeProvider) {
  $routeProvider
  .when( '/usr', 
    {
      templateUrl: 'templates/usr.html',
      controller: 'userController' 
    })
  .when( '/posts/:userId', 
    {
      templateUrl: 'templates/posts.html',
      controller: 'postsController' 
    })
  .otherwise( { redirectTo: 'usr' } );

}]);

app.controller('userController', [ '$scope', users, function($scope, users) {
  
  users.grabUsers( function(users) {
    console.log("then", users );
    $scope.users = users;
  });

}]);

app.controller('postsController', [ '$scope', '$routeParams', function($scope, $routeParams, users) {
  console.log( $routeParams.userId );
  
}]);

app.factory('users', [ '$http', function($http) {
  var factory = {};

  factory.grabUsers = function( callback ) {
    $http.get('/users.json').success( function(data) {
      callback( data);
    })
    .error( function(data, status, headers, config) {
      console.debug("status: ", status);
    });
  };

  return factory;

}]);

