// Write your code here
var Pokemon = angular.module("Pokemon",[]);

Pokemon.controller("ListadoPokemon", function($scope,$http) {
  $scope.conteo = 0;
  $scope.Poke = [];
  for (var i=1;i<=504.0;i++) {
    $scope.conteo = $scope.conteo + 1;
    $http({
      method: 'POST',
      url: "http://pokeapi.co/api/v2/pokemon/" + $scope.conteo
    }).then(function successCallback(response) {
      for (var x = 0; x <= i; x++) {
         if (response.data.id == x) {
           $scope.Poke[x] = {"data":response.data}
           if (x <10) {
             $scope.PokePicture = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/00"+x+".png";
             $scope.Poke[x].sprites = {"front_default":$scope.PokePicture}
           } else if (x >= 10 && x <= 99) {
             $scope.PokePicture = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/0"+x+".png";
             $scope.Poke[x].sprites = {"front_default":$scope.PokePicture}
           } else if (x >=100) {
             $scope.PokePicture = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+x+".png";
             $scope.Poke[x].sprites = {"front_default":$scope.PokePicture}
           }
         }
       }
    }), function errorCallback(response) {
      console.log("Error");
    }
  }
})
