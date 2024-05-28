app.controller("adminController", function ($scope, $http, $location) {
    $scope.products = [];
    $scope.loadData = function () {
        $http.get("http://localhost:3000/sanpham").then(
            function (response) {
                $scope.products = response.data;
            },
            function (response) {
                alert("Dữ liệu chưa được lấy ra");
            });
    };
    $scope.loadData();  

    $scope.addProduct = function () {
        if ($scope.productForm.$valid) {
            $http.post("http://localhost:3000/sanpham", $scope.product)
                .then(function (response) {
                    $scope.loadData();
                });
        }
    };

    $scope.deleteProduct = function (id) {
        $http.delete("http://localhost:3000/sanpham/" + id)
            .then(function (response) {
                $scope.loadData();
            });
    };

    $scope.editProduct = function (product) {
        $scope.editedProduct = angular.copy(product);
        $scope.editedProduct.id = product.id;

    };

    $scope.updateProduct = function () {
        $http.put("http://localhost:3000/sanpham/" + $scope.editedProduct.id, $scope.editedProduct)
            .then(function (response) {
                $scope.loadData();
            });
    };

    
});