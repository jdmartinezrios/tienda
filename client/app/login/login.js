'use strict';

angular.module('inventariosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<login></login>'
      });
  });
