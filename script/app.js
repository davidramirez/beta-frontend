//var app = angular.module('app', ['ui.bootstrap', 'ngRoute','chart.js']);

var app = angular.module('app', ['ui.bootstrap', 'ui.router','chart.js','pascalprecht.translate']);

app.controller('mainController', function ($scope) {
  
  // COLLAPSE
  $scope.isCollapsed = 'true';
 
    $scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
    };
});