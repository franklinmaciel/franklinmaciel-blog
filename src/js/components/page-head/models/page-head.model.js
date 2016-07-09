(function(){
	
	"use strict";

	angular.module('frontpress.components.page-head').factory('PageHeadModel', PageHeadModel);

	function PageHeadModel(){
		var model = {
			init: init,
			isFollow: true,
			isIndex: true,
			pageCanonical: null,
			pageDescription: null,
			pageRobots: null,	
			pageTitle: null,
			setIsFollow: setIsFollow,
			setIsIndex: setIsIndex,
			setPageCanonical: setPageCanonical,
			setPageDescription: setPageDescription,
			setPageTitle: setPageTitle,
			setRelPrev: setRelPrev,
			setRelNext: setRelNext,
			relNext: null,
			relPrev: null
		};

		function setPageTitle(pageTitle){
			model.pageTitle = pageTitle;
		}

		function setPageDescription(pageDescription){
			model.pageDescription = pageDescription;
		}

		function setRelNext(relNext){
			model.relNext = relNext;
		}

		function setRelPrev(relPrev){
			model.relPrev = relPrev;
		}

		function setIsIndex(isIndex){
			model.isIndex = isIndex;
			_setPageRobots();
		}

		function setIsFollow(isFollow){
			model.isFollow = isFollow;
			_setPageRobots();
		}

		function _setPageRobots(){
        	var isIndexString = model.isIndex ? 'index' : 'noindex';
        	var isFollowString = model.isFollow ? 'follow' : 'nofollow';
        	model.pageRobots = '{0}, {1}'.format(isIndexString, isFollowString);					
		}

		function setPageCanonical(pageCanonical){
			model.pageCanonical = pageCanonical;
		}

		function init(){
			_setPageRobots();
		}


		return model;
	}

})();