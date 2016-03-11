/**
 * Created by liqing on 16/3/11.
 */
MyApp.factory('MainService', function(){
  var languages = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  return {
    langs: languages
  };
});
