'use strict';

angular.module('inventariosApp', [
  'inventariosApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'satellizer'

])
  .constant('API','http://10.72.197.244:25956/Inventarios')
  .config(function($urlRouterProvider, $locationProvider,$authProvider, API) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
      $authProvider.loginUrl = API+'/api/auth/login';
      $authProvider.tokenName = 'token';
      $authProvider.tokenPrefix = 'Inventarios';
  });
