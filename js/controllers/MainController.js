angular.module("scle").controller("MainController", function ($scope) {
	$scope.produtos = [
		{ 
			nome: 'Pilha', 
			imagem: 'images/pilha.jpg',
			qtd: 0,
		}, 
		{ 
			nome: 'Celular', 
			imagem: 'images/cel.png',
			qtd: 0,
		},
		{ 
			nome: 'Cartucho', 
			imagem: 'images/cartucho.jpg',
			qtd: 0,
		},
		
	];
	
	$scope.mais = function(index) { 
		$scope.produtos[index].qtd += 1; 
	};
	
	$scope.menos = function(index) { 
		if($scope.produtos[index].qtd > 0){
			$scope.produtos[index].qtd -= 1; 
		}
	};		
});