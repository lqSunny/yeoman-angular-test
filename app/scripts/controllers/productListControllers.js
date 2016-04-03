/**
 * Created by liqing on 16/3/17.
 */
angular.module('sportsStore')
  .constant('productListActiveClass', 'btn-primary') //定义常量 高亮的颜色 bootstrap类
  .constant('productListPageCount', 3) //定义常量 每页显示的记录数
  .controller('productListCtrl', function ($scope, $filter, productListActiveClass, productListPageCount) {
    var selectedCategory = null; //已选的类型

    $scope.selectedPage = 1; //当前页
    $scope.pageSize = productListPageCount; //每页显示的记录数
    //选择类型
    $scope.selectCategory = function (newCategory) {
      selectedCategory = newCategory;
      $scope.selectedPage = 1;
    };
    //设置当前所点击的页码
    $scope.selectPage = function(newPage){
      $scope.selectedPage = newPage;
    };
    //显示已选类型的产品
    $scope.categoryFilterFn = function (product) {
      return selectedCategory == null || product.category == selectedCategory;
    };
    //已选的类型高亮显示
    $scope.getCategoryClass = function(category){
      return selectedCategory == category? productListActiveClass: '';
    };
    //为所点击的页码设置高亮
    $scope.getPageClass = function(page){
      return $scope.selectedPage == page? productListActiveClass: '';
    };

  });
