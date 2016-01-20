   app.config(['$translateProvider', function ($translateProvider) {
       
      $translateProvider.useStaticFilesLoader({
    prefix: 'languages/',
    suffix: '.json'
  });
       
       $translateProvider.preferredLanguage('es_ES');
       $translateProvider.useSanitizeValueStrategy('escape'); 
    }]);