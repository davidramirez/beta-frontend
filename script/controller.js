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




app.controller('myNavMenuController',  function($scope, $location) {
  $scope.currentUrl = $location.path;
   
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