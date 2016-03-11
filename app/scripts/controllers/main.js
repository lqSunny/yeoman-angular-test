'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanAngularApp
 */
MyApp.controller('MainCtrl', function ($scope, MainService) {
  $scope.languages = MainService.langs;
});
