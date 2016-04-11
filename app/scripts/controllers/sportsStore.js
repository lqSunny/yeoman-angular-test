/**
 * Created by liqing on 16/3/16.
 */
angular.module('sportsStore')
  .constant('dataUrl', 'http://localhost:5500/products')
  .controller('sportsStoreCtrl', function($scope, $http, dataUrl){
    $scope.data = {};


    //$http.get(dataUrl)
    //  .success(function(data){
        data = [
          {
            id: '001',
            name: '产品 #1',
            description: '这是一个产品',
            category: '类型 #1',
            price: 100
          },
          {
            id: '002',
            name: '产品 #2',
            description: '这是一个产品',
            category: '类型 #3',
            price: 200
          },
          {
            id: '003',
            name: '产品 #3',
            description: '这是一个产品',
            category: '类型 #1',
            price: 300
          },
          {
            id: '004',
            name: '产品 #4',
            description: '这是一个产品',
            category: '类型 #3',
            price: 400
          },
          {
            id: '005',
            name: '产品 #5',
            description: '这是一个产品',
            category: '类型 #1',
            price: 300
          },
          {
            id: '006',
            name: '产品 #6',
            description: '这是一个产品',
            category: '类型 #3',
            price: 400
          },
          {
            id: '007',
            name: '产品 #7',
            description: '这是一个产品',
            category: '类型 #1',
            price: 300
          },
          {
            id: '008',
            name: '产品 #8',
            description: '这是一个产品',
            category: '类型 #3',
            price: 400
          }
        ];
        $scope.data.products = data;
      //})
      //.error(function(error){
      //  $scope.data.error = error;
      //});
});
