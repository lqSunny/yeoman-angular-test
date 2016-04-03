/**
 * Created by liqing on 16/3/16.
 */
angular.module('sportsStore', ['customFilters'])
.controller('sportsStoreCtrl', function($scope){
    $scope.data = {
        products: [
          {
            name: '产品 #1',
            description: '这是一个产品',
            category: '类型 #1',
            price: 100
          },
          {
            name: '产品 #2',
            description: '这是一个产品',
            category: '类型 #3',
            price: 200
          },
          {
            name: '产品 #3',
            description: '这是一个产品',
            category: '类型 #1',
            price: 300
          },
          {
            name: '产品 #4',
            description: '这是一个产品',
            category: '类型 #3',
            price: 400
          },
          {
            name: '产品 #5',
            description: '这是一个产品',
            category: '类型 #1',
            price: 300
          },
          {
            name: '产品 #6',
            description: '这是一个产品',
            category: '类型 #3',
            price: 400
          },
          {
            name: '产品 #7',
            description: '这是一个产品',
            category: '类型 #1',
            price: 300
          },
          {
            name: '产品 #8',
            description: '这是一个产品',
            category: '类型 #3',
            price: 400
          }
        ]
    };
});
