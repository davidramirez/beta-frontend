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
