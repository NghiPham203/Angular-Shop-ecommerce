app.controller("homeController", function ($scope, $http, $rootScope) {
  $scope.filteredProducts = [];
  $scope.jacket = false;
  $scope.hoodie = false;
  $scope.pant = false;

  $scope.dsSanpham = [];

  $http.get("http://localhost:3000/sanpham").then(
    function (res) {
      $scope.dsSanpham = res.data;
      $scope.filteredProducts=angular.copy($scope.dsSanpham);
    },
    function (res) {
      alert('Failed to fetch data');
    }
  );
// SEARCH
  $scope.searchProduct = function () {
    if (!$scope.search || $scope.search === '') {
      $scope.filteredProducts = $scope.dsSanpham;
    } else {
      $scope.filteredProducts = $scope.dsSanpham.filter(function (product) {
        return product.name.toLowerCase().includes($scope.search.toLowerCase());
      });
    }
  };
 // CART
  $rootScope.addToCart = function (sanpham) {
    let inCart = false;
    $rootScope.cart.forEach(sp => {
      if (sp.id == sanpham.id) {
        inCart = true;
        sp.quantity++;
      }
    });
    if (!inCart) {
      sanpham.quantity = 1;
      $rootScope.cart.push(sanpham);
    }
    localStorage.setItem('cart', JSON.stringify($rootScope.cart));
  }
 // FILTER
  $scope.filterProducts = function () {
    $scope.filteredProducts = [];

    if ($scope.jacket) {
      $scope.filteredProducts = $scope.dsSanpham.filter(function (sanpham) {
        return sanpham.category === "Jacket";
      });
    }

    if ($scope.hoodie) {
      $scope.filteredProducts = $scope.filteredProducts.concat(
        $scope.dsSanpham.filter(function (sanpham) {
          return sanpham.category === "Hoodie";
        })
      );
    }

    if ($scope.pant) {
      $scope.filteredProducts = $scope.filteredProducts.concat(
        $scope.dsSanpham.filter(function (sanpham) {
          return sanpham.category === "Pant";
        })
      );
    }

    if (!$scope.jacket && !$scope.hoodie && !$scope.pant) {
      $scope.filteredProducts = $scope.dsSanpham;
    }
  };
  
});
