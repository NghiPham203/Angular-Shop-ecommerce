app.controller("chitietController", function ($scope, $routeParams, $http) {
  $scope.id = $routeParams.id;
  $scope.chitiet = {};

  // Fetch data from database.json
  $http.get(`http://localhost:3000/sanpham/${$routeParams.id}`).then(
    function(res) { // success
      $scope.chitiet = res.data;
    },
    function(res) { // error
      console.error("Error fetching data");
    }
  );
});
