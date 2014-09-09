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

app.controller('userController', [ '$scope', 'users', function($scope, users) {
  
  users.promise.then( function(response) {
    console.log( response.data );
    $scope.users = response.data;
  });

}]);

app.controller('postsController', [ '$scope', '$routeParams', 'users', function($scope, $routeParams, users) {
  console.log( $routeParams.userId );
  
}]);

app.factory('users', [ '$http', function users($http) {
  var factory = { };

  var url = '/users.json' +  '/?callback=JSON_CALLBACK';

  factory.promise = $http.jsonp(url)
    .success( function(data, status, headers, config) {
      factory.data = data;
    })
    .error( function(data, status, headers, config) {
      console.debug("status: ", status);
    });


 return factory;
}]);

