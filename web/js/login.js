app.controller("loginController", function ($scope, $http, $location, $rootScope) {
  $scope.login = function () {
    $http.get(`http://localhost:3000/user?email=${$scope.email}&password=${$scope.password}`).then(
      function (res) {
        if (res.data.length == 0) {
          $scope.isError = true;
        } else {
          console.log(res);
          $rootScope.user = res.data[0];
          // check role
          if ($rootScope.user.role == 1) {
            $location.path("/admin");
          } else {
            $location.path("/");
          }
          localStorage.setItem('user', JSON.stringify($rootScope.user));
        }
      },
      function (res) {
        $scope.isError = true;
      }
    );
  };
});
