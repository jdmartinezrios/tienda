'use strict';

describe('Service: usuario', function () {

  // load the service's module
  beforeEach(module('inventariosApp.usuario'));

  // instantiate service
  var usuario;
  beforeEach(inject(function (_usuario_) {
    usuario = _usuario_;
  }));

  it('should do something', function () {
    !!usuario.should.be.true;
  });

});
