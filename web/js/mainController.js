app.controller("mainController", function ($scope,$rootScope,$location) {
    if(localStorage.getItem('user')){
        $rootScope.user = JSON.parse(localStorage.getItem('user'))
    }
    // Logout
    $scope.logout=function(){
        localStorage.removeItem('user');
        delete $rootScope.user;
        $location.path('/login')
    }
    // Luu gio hang trong main
    if(localStorage.getItem('cart')){
        $rootScope.cart = JSON.parse(localStorage.getItem('cart'));
        
      }else{
        $rootScope.cart=[];
      }
})