app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("home");
  //
  // Now set up the states
  $stateProvider
      .state('home', {
          url: "/home",
          templateUrl: 'partials/home.html',
          controller  : 'homeController'
        })
  
    .state('add', {
      url: "/add",
      templateUrl: 'partials/add.html',
      controller  : 'addController'
    })
   
    .state('last', {
      url: "/last",
      templateUrl:'partials/last.html',
      controller  : 'lastController'
    })
    .state('hist', {
      url: "/list",
      templateUrl: 'partials/hist.html',
      controller  : 'histController'
      }
    )   ;
        
   
});
