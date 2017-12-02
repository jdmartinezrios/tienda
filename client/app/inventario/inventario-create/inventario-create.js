'use strict';

angular.module('inventariosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('inventario-create', {
        url: '/inventario-create',
        template: '<inventario-create></inventario-create>'
      });
  });
