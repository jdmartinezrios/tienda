
(function () {
  'use strict';
  angular.module('inventariosApp')
  .factory('inventarioService', inventarioService);
  inventarioService.inject =["$resource","API"];
  function inventarioService($resource, API) {
    return $resource(API+"/api/activos:id",{
      id:'@id'

    },{

      update:{
        method:'PUT'
      }


    });



  }
})();
