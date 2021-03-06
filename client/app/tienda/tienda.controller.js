'use strict';
(function(){

  class TiendaComponent{
    constructor(){
      this.saludo = 'hola mundo';
      this.productos = [
        {
          id:1,
          cantidad:0,
          nombre:'pantalla LCD',
          marca:'LG',
          valor:2200000,
          decuento:0
        },
        {
          id:2,
          cantidad:0,
          nombre:'tarjeta ATX',
          marca:'AMD',
          valor:300.000,
          descuento:0
        },
        {
          id:3,
          cantidad:0,
          nombre:'iphone x',
          marca:'APPLE',
          valor:2800000,
          decuento:0
        },
        {
          id:4,
          cantidad:0,
          nombre:'nevera LG',
          marca:'LG',
          valor:11000000,
          descuento:0
        }
      ];
      this.carrito = [];
    }

    $onInit(){
      console.log(this.saludo);
    }
    seleccionarProducto(item){
      $('#modalProducto').modal('show');
      this.carrito.push(item);
      this.contador1 = 0;
      this.cantidadP = 0;
      for(var i = 0; i < this.carrito.length; i++){
        this.contador1 += this.carrito[i].valor;
        if(item.id === this.carrito[i].id){
          this.cantidadP += 1;
          this.cantidad = this.cantidadP;
        }
        }
        this.total = this.contador1;
      }
    }
  angular.module('inventariosApp')
  .component('tienda',{
    templateUrl:'app/tienda/tienda.html',
    controller:TiendaComponent,
    controllerAs:'vm'
  });
})();
