angular.module('formulario', [])
.controller('dados', function($scope,$http) {
   	$http.get('http://localhost:8000/cliente/usuario/teste2@teste.com').
        then(function(response) {
            $scope.dados = response.data;
        });
});