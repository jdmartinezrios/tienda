
'use strict';

function AuthService($auth,$state){
  var Auth = {
    login: login,
  };

  function login(usuarios){
    $auth.login(usuarios)
    .then(response => {
      $state.go("main");
      console.log("Login Realizado correctamente");
    })
    .catch(err => {
      $state.go("login");
      console.log("Error en el login");
    })
  }



  return Auth;
}

angular.module("inventariosApp")
.factory("AuthService",AuthService);
