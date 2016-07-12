(function(){
	'use strict';

	angular.module('frontpress.views.sobre').controller('SobreDirectiveController', SobreDirectiveController);

    function SobreDirectiveController($stateParams, PageHeadModel){
    	var vc = this;
        PageHeadModel.init();        
        PageHeadModel.setPageTitle('Franklin Maciel - Sobre');                     
        vc.disqusId = FullPostModel.slug;
	}

})();
