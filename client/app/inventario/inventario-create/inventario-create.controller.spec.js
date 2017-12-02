'use strict';

describe('Component: InventarioCreateComponent', function () {

  // load the controller's module
  beforeEach(module('inventariosApp'));

  var InventarioCreateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    InventarioCreateComponent = $componentController('InventarioCreateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
