var app = angular.module("myApp", ["ngRoute"]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "home.html",
        controller: "homeController",
      })
      .when("/chitiet/:id", {
        templateUrl: "chitiet.html",
        controller: "chitietController",
      })
      .when("/login", {
        templateUrl: "login.html",
        controller: "loginController",
      })
      .when("/signin", {
        templateUrl: "signin.html",
        controller: "signinController",
      })
      .when("/cart", {
        templateUrl: "cart.html",
        controller: "cartController",
      })
      .when("/admin", {
        templateUrl: "admin.html",
        controller: "adminController",
      })
     
      .otherwise({
        template: "<h1>404</h1><p>Không tìm thấy trang</p>",
      });
  });