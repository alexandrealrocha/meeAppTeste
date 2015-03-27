angular.module('starter.controllers', [])

.controller('ContentController', ['$scope','$ionicSideMenuDelegate',function($scope,$ionicSideMenuDelegate) {
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
}])

.controller('HomeCtrl', ['$scope','$http',function($scope,$http) {
    $scope.data = {
       itens : []
    };

	$http
		.get('data/ultimasNoticias.json')
		.success(
			function(data, status, headers, config) {
				$scope.data.itens = data;
			}
		);

}])

.controller('MenuController',['$scope',function($scope){
      $scope.data = {
        items : []
      };

      for(var i = 0; i < 10; i++) {
        $scope.data.items.push({
          id : i,
          label : "Menu Item " + i
        })
      }

}])


.controller('NoticiaController',['$scope','$stateParams','$http',function($scope,$stateParams,$http){
	var noticiaID = $stateParams.noticiaId;
	$scope.data = {
		materia : {}
	}

	$http
		.get(
			'data/materias/'+noticiaID+'.json',
			{
				headers: {
				   "Content-Type": "application/json; charset=utf-8",
				}
			}
		)
		.success(
			function(data, status, headers, config) {
				$scope.data.materia = data;
				console.log($scope.data.materia);
			}
		);
}])


.directive("menuItem", function() {
  return {
    restrict : "E",
    templateUrl : "templates/diretivas/menuItem.html"
  }
})

.directive("meeNoticiaListagem", function() {
  return {
    restrict : "E",
    templateUrl : "templates/diretivas/meeNoticiaListagem.html"
  }
});
