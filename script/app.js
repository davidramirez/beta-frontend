//var app = angular.module('app', ['ui.bootstrap', 'ngRoute','chart.js']);

var app = angular.module('app', ['ui.bootstrap', 'ui.router','chart.js']);

app.controller('mainController', function ($scope) {
  
  // COLLAPSE
  $scope.isCollapsed = 'true';
 
    $scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
    };
});

app.controller('homeController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Usuario!';
    });

 app.controller('addController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Pagina para añadir!';
    });

 app.controller('lastController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Pagina para ver el ultimo!';
    });

app.controller('histController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Pagina para ver el historico!';
    });

/*app.directive('bsActiveLink', ['$location', function ($location) {
return {
    restrict: 'A', //use as attribute 
    replace: false,
    link: function (scope, elem) {
        //after the route has changed
        scope.$on("$routeChangeSuccess", function () {
            var hrefs = ['#/' + $location.path(),
                         '#' + $location.path(), //html5: false
                         $location.path()]; //html5: true
            angular.forEach(elem.find('a'), function (a) {
                a = angular.element(a);
                if (-1 !== hrefs.indexOf(a.attr('href'))) {
                    a.parent().addClass('active');
                    console.info()
                } else {
                    a.parent().removeClass('active');   
                };
            });     
        });
    }
}
}]);*/


app.controller('myNavMenuController',  function($scope, $location) {
  $scope.currentUrl = $location.path;
   
});


app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("home");
  //
  // Now set up the states
  $stateProvider
      .state('home', {
          url: "/home",
          templateUrl: 'pages/home.html',
          controller  : 'homeController'
        })
  
    .state('add', {
      url: "/add",
      templateUrl: 'pages/add.html',
      controller  : 'addController'
    })
   
    .state('last', {
      url: "/last",
      templateUrl:'pages/last.html',
      controller  : 'lastController'
    })
    .state('hist', {
      url: "/list",
      templateUrl: 'pages/hist.html',
      controller  : 'histController'
      }
    )   ;
        
   
});



app.controller("BarCtrl", function ($scope) {
  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['YouTube', 'Facebook','Twitter'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90],
    [50, 20, 48, 29, 36, 70, 69]
  ];
});

app.controller("PieCtrl", function ($scope) {
  $scope.labels = ['YouTube', 'Facebook','Twitter'];
  $scope.data = [65, 59, 80];
});