(function(){
	'use strict';

	angular.module('frontpress.views.post').config(configSobre);

    configSobre.$inject = ["$stateProvider"];

    function configSobre($stateProvider){

        var stateSobre = {
            url: '/pagina/sobre',
            template: '<sobre-view></sobre-view>',
            controller: 'SobreRouteController',
            controllerAs: 'vc'
        };

        $stateProvider.state('sobre', stateSobre);
    }

})();
