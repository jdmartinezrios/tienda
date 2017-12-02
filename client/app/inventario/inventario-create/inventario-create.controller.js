'use strict';
(function(){

class InventarioCreateComponent {
  constructor(inventarioService) {
    this.inventarioService = inventarioService;
    
  }
  // hacerInventario(){
	// 		this.inventarioService.save(this.articuloInventario).$promise
	// 		.then(response => {
	// 			alert('Giro Enviado Exitosamente');
	// 		})
	// 		.catch(err => console.log("ERROR",err));
	// 	}
      hacerInventario(){
        console.log(this.articuloInventario);
        this.inventarioService.save(this.articuloInventario).$promise
        .then(response => {
          console.log("Alquiler guardado...",response);

        })
        .catch(err => console.error(err));
      }
}


angular.module('inventariosApp')
  .component('inventarioCreate', {
    templateUrl: 'app/inventario/inventario-create/inventario-create.html',
    controller: InventarioCreateComponent,
    controllerAs:'vm'
  });

})();
