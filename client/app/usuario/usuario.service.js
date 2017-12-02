function usuarioService($resource,API){
	return $resource(API+'/Inventario​/api/usuarios:id',{
		id:'@id'
	},
	{
		update:{
			method:'PUT'
		}

	})
}

angular.module('inventariosApp')
.factory('usuarioService',usuarioService);
