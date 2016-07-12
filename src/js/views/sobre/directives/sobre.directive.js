(function(){

	"use strict";

	angular.module('frontpress.views.sobre').directive('sobreView', sobreView);

	function sobreView(){
		var directive = {
			scope: {},
			templateUrl: '/js/views/sobre/templates/sobre.template.html',
			restrict: 'E',
			controllerAs: 'vc',
			bindToController: true,
			controller: 'SobreDirectiveController'
		};
		return directive;
	}

})();
