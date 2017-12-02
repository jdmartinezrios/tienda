'use strict';

  angular.module('inventariosApp')
  .config(function($stateProvider){
    $stateProvider
    .state('tienda',{
      url:'/tienda',
      template:'<tienda></tienda>'
    });
  });
