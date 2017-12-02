'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },
  {
    'title': 'Tienda',
    'state': 'tienda'
  }
];

  isCollapsed = true;
  //end-non-standard


}

angular.module('inventariosApp')
  .controller('NavbarController', NavbarController);
