'use strict';

/**
 * @ngdoc overview
 * @name yeomanAngularApp
 * @description
 * # yeomanAngularApp
 *
 * Main module of the application.
 */
/*var MyApp = angular.module('AngularApp', [
 //'ngAnimate',
 'ngRoute'

 ])
 .config(function ($routeProvider) {
 $routeProvider
 .when('/', {
 templateUrl: 'views/main.html',
 controller: 'MainCtrl',
 controllerAs: 'main'
 })
 .otherwise({
 redirectTo: '/'
 });
 });*/

angular.module('sportsStore', ['customFilters', 'cart', 'ngRoute'])
  .config(function ($routeProvider) {

    $routeProvider
      //
      .when('/complete', {
        templateUrl: 'views/thankYou.html'
      })
      //
      .when('/placeorder', {
        templateUrl: 'views/placeOrder.html'
      })
      //购物车
      .when('/checkout', {
        templateUrl: 'views/checkoutSummary.html'
      })
      //商品列表
      .when('/products', {
        templateUrl: 'views/productList.html'
      })
      .otherwise({
        templateUrl: 'views/productList.html'
      });

  });

