(function(){

	"use strict";

	angular.module('frontpress', ['frontpress.views.home', 'frontpress.views.post', 'frontpress.apis.blog', 'frontpress.components.frontpress-provider']);

})();
(function(){
    'use strict';

    angular.module("frontpress").config(frontpressConfig);

    function frontpressConfig($interpolateProvider, $httpProvider, $urlRouterProvider, $locationProvider, BlogApiProvider, PostsApiProvider, $FrontpressProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $locationProvider.html5Mode(true);                    
        $FrontpressProvider.configure.load();
    }

})();


(function(){
	'use strict';

	angular.module('frontpress').controller('FrontPressController', FrontPressController);

    function FrontPressController(){
    	var vc = this;
	}

})();
(function(){
    'use strict';

    angular.module("frontpress").run(frontpressRun);

    function frontpressRun(){

    	function extendStringPrototype(){
			if (!String.prototype.format) {
				String.prototype.format = function() {
					var args = arguments;
					return this.replace(/{(\d+)}/g, function(match, number) {
						return typeof args[number] != 'undefined' ? args[number] : match;
					});
				};
			}    	    		
    	}

    	extendStringPrototype();
    }

})();


(function(){

	"use strict";

	angular.module('frontpress.filters', []);

})();
(function(){

	"use strict";

	angular.module('frontpress.apis.blog', ['frontpress.components.ajax', 'frontpress.components.frontpress-provider']);

})();
(function(){

	"use strict";

	angular.module('frontpress.apis.posts', ['frontpress.components.ajax', 'frontpress.components.frontpress-provider']);

})();
(function(){

    'use strict';

    angular.module('frontpress.components.ajax', []);

})();
(function(){

	"use strict";

	angular.module('frontpress.components.blog-information', ['frontpress.components.frontpress-provider']);

})();
(function(){

	"use strict";

	angular.module('frontpress.components.frontpress-provider', ['ngDisqus']);

})();
(function(){

	"use strict";

	angular.module('frontpress.components.full-post', ['frontpress.filters']);

})();
(function(){

	"use strict";

	angular.module('frontpress.components.list-posts', ['frontpress.apis.posts', 'frontpress.filters']);

})();
(function(){
	
	"use strict";

	angular.module('frontpress.components.page-head', []);

})();
(function(){
	

	"use strict";

	angular.module('frontpress.components.pagination', ['frontpress.components.page-head']);

})();
(function(){
	'use strict';

	angular.module('frontpress.views.home', ['ui.router', 'infinite-scroll', 'frontpress.components.list-posts', 'frontpress.components.pagination', 'frontpress.components.page-head', 'frontpress.apis.blog']);

})();
(function(){
	"use strict";

	angular.module('frontpress.views.post', ['frontpress.components.full-post', 'ui.router', 'frontpress.components.page-head', 'ngDisqus']);
})();
(function(){

	"use strict";

	angular.module('frontpress.components.full-post').directive('fullPost', FullPostDirective);

	function FullPostDirective(){
		var directive = {
			restrict: 'E',
			scope: {},
			templateUrl: '/js/components/full-post/templates/full-post.template.html',
			controller: 'FullPostDirectiveController',
			controllerAs: 'vc',
			bindToController: true
		};

		return directive;
	}

})();
(function(){

	"use strict";

	angular.module('frontpress.components.list-posts').directive('listPosts', ListPostsDirective);

	function ListPostsDirective(){
		var directive = {
			scope: {},
			restrict: 'E',
			controller: 'ListPostsDirectiveController',
			controllerAs: 'vc',
			bindToController: true,
			templateUrl: "/js/components/list-posts/templates/list-posts.template.html"
		};
		return directive;
	}

})();
(function(){
	
	"use strict";

	angular.module('frontpress.components.page-head').directive('pageHead', pageHead);

	function pageHead(){
		var directive = {
			templateUrl: '/js/components/page-head/templates/page-head.template.html',
			scope: {},
			controllerAs: 'vc',
			controller: 'PageHeadController',
			bindToController: true,
			restrict: 'AE',
			replace: false,					
			transclude: true,
		};
		return directive;
	}

})();
(function(){	

	"use strict";

	angular.module('frontpress.components.pagination').directive('pagination', pagination);

	function pagination(){
		var directive = {
			restrict: 'AE',
			replace: true,
			scope: {},
			templateUrl: '/js/components/pagination/templates/pagination.template.html',
			controllerAs: 'vc',
			controller: 'PaginationController',
			bindToController: true,
		};
		return directive;
	}

})();
(function(){

	"use strict";

	angular.module('frontpress.views.home').directive('homeView', HomeViewDirective);

	function HomeViewDirective(){
		var directive = {
			scope: {},
			templateUrl: '/js/views/home/templates/home.template.html',
			restrict: 'E',
			controllerAs: 'vc',
			bindToController: true,
			controller: 'HomeDirectiveController'
		};
		return directive;
	}

})();

(function(){

	"use strict";

	angular.module('frontpress.views.post').directive('postView', PostViewDirective);

	function PostViewDirective(){
		var directive = {
			scope: {},
			templateUrl: '/js/views/post/templates/post.template.html',
			restrict: 'E',
			controllerAs: 'vc',
			bindToController: true,
			controller: 'PostDirectiveController'
		};
		return directive;
	}

})();

(function(){
	'use strict';

	angular.module('frontpress.filters').filter('trustAsHtml', TrustAsHtml);

	TrustAsHtml.$inject = ['$sce'];

	function TrustAsHtml($sce){

		function filter(text){
			return $sce.trustAsHtml(text);
		}

		return filter;
	}

})();
(function(){
	'use strict';

	angular.module('frontpress.views.home').config(configHome);

    configHome.$inject = ["$stateProvider", "$urlRouterProvider"];

    function configHome($stateProvider, $urlRouterProvider){

        var stateHome = {
            url: '/',
            template: '<home-view></home-view>',
            controller: 'HomeRouteController as vc'
        };

        var stateHomePagination = {
            url: '/page/{pageNumber:[0-9]{1,}}',
            template: '<home-view></home-view>',
            controller: 'HomeRouteController as vc'
        };

        $stateProvider.state('home', stateHome);
        $stateProvider.state('home-pagination', stateHomePagination);
    }

})();

(function(){
	'use strict';

	angular.module('frontpress.views.post').config(configPost);

    configPost.$inject = ["$stateProvider"];

    function configPost($stateProvider){

        var statePost = {
            url: '/:postSlug',
            template: '<post-view></post-view>',
            controller: 'PostRouteController as vc'
        };

        $stateProvider.state('post', statePost);
    }

})();

(function() {
  'use strict';

  angular.module('frontpress.apis.blog').factory('BlogApi', BlogApi);

  BlogApi.$inject = ['AjaxModel', '$Frontpress'];
  
  function BlogApi(AjaxModel, $Frontpress) {
    var baseUrl = $Frontpress.restApiUrl;

    var restApi = {
      getBlogInformation: getBlogInformation,
    };
    
    return restApi;

    function getBlogInformation() {
      return AjaxModel.get(baseUrl);
    }

  }
  

})();
(function(){

    angular.module('frontpress.apis.posts').factory('PostsApi', PostsApi);

    PostsApi.$inject = ['AjaxModel', '$Frontpress'];

    function PostsApi(AjaxModel, $Frontpress){
        var postsBaseUrl = $Frontpress.restApiUrl + '/posts/';
        
        var restApi = {
            getAllPosts: getAllPosts,
            getPostBySlug: getPostBySlug
        };

        return restApi;

        function _parseConfigsToParams(configs){
            var params = {};

            if(configs){
                if(configs.pageSize) params.number = parseInt(configs.pageSize);
                if(configs.pageNumber) params.page = parseInt(configs.pageNumber);
                if(configs.context) params.context = configs.context;
                if(configs.fields) params.fields = configs.fields;
            }
            return params;
        }

        function getAllPosts(configs){
            var postsListUrl = postsBaseUrl;
            var params = _parseConfigsToParams(configs);
            return AjaxModel.get(postsListUrl, params);
        }

        function getPostBySlug(postSlug, configs){             
            var postUrl = postsBaseUrl + 'slug:<post-slug>';
            postUrl = postUrl.replace('<post-slug>', postSlug);
            return AjaxModel.get(postUrl, configs);
        }
    }

})();

(function() {
  'use strict';

  angular.module('frontpress.components.ajax').factory('AjaxModel', AjaxModel);

  function AjaxModel($http) {

    var model = {
      get: get,
      post: post,
      put: put,
    };

    function get(url, params) {
      return request(url, params, 'GET');
    }

    function post(url, params) {
      return request(url, params, 'POST');
    }

    function put(url, params) {
      return request(url, params, 'PUT');
    }

    function request(url, params, method) {
      params = params || {};

      var promise = $http({
        url: url,
        method: method,
        params: params
      });

      return promise;
    }

    return model;

  }
})();
(function(){

	"use strict";

	angular.module('frontpress.components.blog-information').factory('BlogInformationModel', BlogInformationModel);

	function BlogInformationModel(BlogApi, $Frontpress){
		var model = {
			description: null,
			isLoadingBlogInformation: false,
			loadBlogInformation: loadBlogInformation,
			name: null,
			setDescription: setDescription,
			setName: setName,
		};


		function setDescription(description){
			model.description = description;
		}

		function setName(name){
			model.name = name;
		}

		function loadBlogInformation(){
			model.isLoadingBlogInformation = true;
			var postPromise = BlogApi.getBlogInformation();

			postPromise.success(function(result){
				model.setName('asdasdasd');
				model.setDescription(result.description);
				model.isLoadingBlogInformation = false;
			});
		}

		return model;
	}

})();
angular.module("frontpress.componentes.frontpress-provider", [])
.constant("restApiUrl", "https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com")
.constant("pageSize", "5")
.constant("disqusShortname", "jotateles")
.constant("overrides", {
    "title": "Teste de título com override"
});

(function(){
	"use strict";
	angular.module('frontpress.components.frontpress-provider').provider('$Frontpress', FrontpressProvider);
	
	function FrontpressProvider(FrontpressConfigurationFile, $disqusProvider){
		var configure = {
			restApiUrl: null,
			setRestApiUrl: setRestApiUrl,
			pageSize: null,
			setPageSize: setPageSize,
			load: load,
			overrides: null,
			setOverrides: setOverrides
		};

		function setPageSize(pageSize){
			configure.pageSize = pageSize;
		}

		function setRestApiUrl(restApiUrl){
			configure.restApiUrl = restApiUrl;
		}

		function setOverrides(overrides){
			configure.overrides = overrides;
		}

		function load(){

			var configsToFunctions = {
				restApiUrl: configure.setRestApiUrl,
				pageSize: configure.setPageSize,
				disqusShortname: $disqusProvider.setShortname,
				overrides: configure.setOverrides
			};

			for(var config in configsToFunctions){
				configsToFunctions[config](FrontpressConfigurationFile[config]);
			}		

            if (angular.isUndefined(FrontpressConfigurationFile.restApiUrl)) {
                throw '[frontpress missing variable]: restApiUrl is mandatory. You should provide this variable using frontpress.json file or $FrontpressProvider in you app config.';
            }

		}

		var provider = {
			$get: Frontpress,
			configure: configure
		};


		return provider;

		function Frontpress(){
			var model = {
				pageSize: configure.pageSize,
				restApiUrl: configure.restApiUrl,
				overrides: configure.overrides
			};

			return model;
		}
	}	

})();


(function(){

"use strict";

angular.module("frontpress.components.frontpress-provider")
.constant("FrontpressJsonConfiguration", {
    "restApiUrl": "https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com",
    "pageSize": "5",
    "disqusShortname": "jotateles",
    "overrides": {
        "title": "Teste de título com override"
    }
});


})();
(function(){

	"use strict";

	angular.module('frontpress.components.full-post').controller('FullPostDirectiveController', FullPostDirectiveController);

	function FullPostDirectiveController(FullPostModel){
		var vc = this;
		vc.vm = FullPostModel;
	}

})();
(function(){

	"use strict";

	angular.module('frontpress.components.full-post').factory('FullPostModel', FullPostModel);

	function FullPostModel(PostsApi, $q){
		var model = {
			categoryNames: null,
			content: null,
			date: null,
			featuredImage: null,
			isLoadingFullPost: false,
			loadFullPostBySlug: loadFullPostBySlug,
			setCategoryNames: setCategoryNames,
			setContent: setContent,
			setDate: setDate,
			setFeaturedImage: setFeaturedImage,
			setTagNames: setTagNames,
			setTitle: setTitle,
			tagNames: null,
			title: null,	
			slug: null,
			setSlug: setSlug
		};

		function setTitle(title){
			model.title = title;
		}

		function setContent(content){
			model.content = content;
		}

		function setDate(date){
			model.date = date;
		}

		function setFeaturedImage(featuredImage){
			model.featuredImage = featuredImage;
		}

		function setCategoryNames(categoryNames){
			model.categoryNames = categoryNames;
		}

		function setTagNames(tagNames){
			model.tagNames = tagNames;
		}

		function setSlug(slug){
			model.slug = slug;
		}

		function loadFullPostBySlug(slug){
			var defer = $q.defer();

			model.isLoadingFullPost = true;
			var configs = {
				fields: 'ID,title,featured_image,data,categories,tags,content,slug'
			};

			var postPromise = PostsApi.getPostBySlug(slug, configs);
			postPromise.success(function(result){
				var categoryNames = JSON.search(result.categories, '//name');
				var tagNames = JSON.search(result.tags,'//name');
				model.setTitle(result.title);
				model.setContent(result.content);
				model.setFeaturedImage(result.featured_image);
				model.setDate(result.date);				
				model.setCategoryNames(categoryNames);
				model.setTagNames(tagNames);
				model.setSlug(result.slug);
				model.isLoadingFullPost = false;
				defer.resolve();
			});
			return defer.promise;
		}

		return model;
	}

})();
(function(){

	"use strict";

	angular.module('frontpress.components.list-posts').controller('ListPostsDirectiveController', ListPostsDirectiveController);

	function ListPostsDirectiveController(ListPostsModel){
		var vc = this;
        vc.vm = ListPostsModel;
	}

})();

(function(){

    "use strict";

    angular.module('frontpress.components.list-posts').factory('ListPostsModel', ListPostsModel);

    function ListPostsModel(PostsApi, $q){
        var model = {
            postsList: null,
            loadPosts: loadPosts,
            pageSize: null,
            pageNumber: 1,
            isLoadingPosts: null,
            totalPostsNumber: null,
            setTotalPostsNumber: setTotalPostsNumber,
        }

        return model;

        function setTotalPostsNumber(totalPostsNumber){
            model.totalPostsNumber = totalPostsNumber;
        }

        function loadPosts(params){
            model.isLoadingPosts = true;
            var defer = $q.defer();

            var configs = {
                fields: 'ID,title,date,featured_image,excerpt'
            };

            var allPostsPromise = PostsApi.getAllPosts(params, configs);

            allPostsPromise.success(function(result){                
                model.totalPostsNumber = result.found;
                if(model.postsList){
                    model.postsList = model.postsList.concat(result.posts);                    
                } else {
                    model.postsList = result.posts;                                        
                }
                defer.resolve();
                model.isLoadingPosts = false;
            });
            return defer.promise;
        }
    }

})();

(function(){
	
	"use strict";

	angular.module('frontpress.components.page-head').controller('PageHeadController', PageHeadController);

	function PageHeadController(PageHeadModel){
		var vc = this;
		vc.vm =	PageHeadModel;
	}

})();
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
(function(){	

	"use strict";

	angular.module('frontpress.components.pagination').controller('PaginationController', PaginationController);

	function PaginationController(PaginationModel){
		var vc = this;
		vc.vm = PaginationModel;
	}

})();
(function(){
	
	"use strict";

	angular.module('frontpress.components.pagination').factory('PaginationModel', PaginationModel);

	function PaginationModel(PageHeadModel){
		var model = {
			lastPageNumber: null,
			pages: null,
			paginationSize: 4,
			generatePaginationFromCurrentPageNumber: generatePaginationFromCurrentPageNumber,
			setLastPageNumber: setLastPageNumber,
			prevPage: null,
			nextPage: null,
			setPrevPage: setPrevPage,
			setNextPage: setNextPage,
		};

		function setNextPage(nextPage){
			model.nextPage = nextPage;
			PageHeadModel.setRelNext(nextPage.href);
		}

		function setPrevPage(prevPage){
			model.prevPage = prevPage;
			PageHeadModel.setRelPrev(prevPage.href);
		}

        function generatePaginationFromCurrentPageNumber(currentPageNumber){
            var paginationPages = [];

            if(currentPageNumber > 1){
            	var prevPageNumber = currentPageNumber - 1;
            	var prevPage = {
            		href: '/page/{0}'.format(prevPageNumber),
            		number: prevPageNumber
            	};
            	model.setPrevPage(prevPage);
            }

            for(var i=1; i <= model.paginationSize; i++){
            	var paginationPageNumber = currentPageNumber + i;
            	if(paginationPageNumber <= model.lastPageNumber) {
	                var paginationPage = {
	                    href: '/page/{0}'.format(paginationPageNumber),
	                    number: paginationPageNumber
	                };
	                paginationPages.push(paginationPage);            		
            	}
            };

            if(currentPageNumber < model.lastPageNumber){
            	var nextPageNumber = currentPageNumber + 1;
            	var nextPage = {
            		href: '/page/{0}'.format(nextPageNumber),
            		number: nextPageNumber
            	};
            	model.setNextPage(nextPage);
            }            

            model.pages = paginationPages;
        }		

		function setPaginationSize(paginationSize){
			model.paginationSize = paginationSize;
		}

		function setLastPageNumber(lastPageNumber){
			model.lastPageNumber = lastPageNumber;
		}

		return model;
	}

})();
(function(){
    'use strict';

    angular.module('frontpress.views.home').controller('HomeDirectiveController', HomeDirectiveController);

    function HomeDirectiveController($stateParams, ListPostsModel, $state, $Frontpress, BlogApi, PageHeadModel, $location, PaginationModel){
        var vc = this;
        vc.vm = ListPostsModel;
        var firstNextPageNumber = 2;
        vc.loadMorePostsAndPaginate = loadMorePostsAndPaginate;
        PageHeadModel.init();
        
        var params = {
            pageSize: $Frontpress.pageSize,
            context: 'embed',
            pageNumber: $stateParams.pageNumber ? $stateParams.pageNumber : 1
        };

        var blogInformationPromise = BlogApi.getBlogInformation();        
        var loadPostsPromise = vc.vm.loadPosts(params);

        loadPostsPromise.then(function(){
            var totalPagesNumber = ListPostsModel.totalPostsNumber / $Frontpress.pageSize;
            PaginationModel.setLastPageNumber(totalPagesNumber);
            _setPaginationPages(params.pageNumber);          
        });

        _setPageMetaData();

        function loadMorePostsAndPaginate(){
            params.pageNumber++;
            var nextPageNumber = params.pageNumber ? params.pageNumber : firstNextPageNumber;
            var paginationOptions = {notify: false};
            vc.vm.loadPosts(params);
            _setPageMetaData();
            _setPaginationPages(params.pageNumber);
            $state.go('home-pagination', {pageNumber: nextPageNumber}, paginationOptions);
        }

        function _setPaginationPages(currentPageNumber){
            PaginationModel.generatePaginationFromCurrentPageNumber(currentPageNumber);
        }

        function _setPageMetaData(){
            blogInformationPromise.success(function(result){
                if(angular.isUndefined($Frontpress.overrides) || angular.isUndefined($Frontpress.overrides.title)){
                    PageHeadModel.setPageTitle(result.name);                    
                } else {                    
                    PageHeadModel.setPageTitle($Frontpress.overrides.title);                    
                }

                PageHeadModel.setPageDescription(result.description);
                var canonical = $location.url();
                PageHeadModel.setPageCanonical(canonical);
            });                    
        }



    }

})();

(function(){
    'use strict';

    angular.module('frontpress.views.home').controller('HomeRouteController', HomeRouteController);

    function HomeRouteController(BlogApi, PageHeadModel, $location){
        var vc = this;
    }

})();
(function(){
	'use strict';

	angular.module('frontpress.views.post').controller('PostDirectiveController', PostDirectiveController);

    function PostDirectiveController(FullPostModel, $stateParams, PageHeadModel){
    	var vc = this;
        vc.vm = FullPostModel;
        var postSlug = $stateParams.postSlug;
        var fullPostPromise = FullPostModel.loadFullPostBySlug(postSlug);
        PageHeadModel.init();
        
        fullPostPromise.then(function(result){
            PageHeadModel.setPageTitle(FullPostModel.title);                     
            vc.disqusId = FullPostModel.slug;
    	});
	}

})();

(function(){
	'use strict';

	angular.module('frontpress.views.post').controller('PostRouteController', PostRouteController);

    function PostRouteController(){
    	var vc = this;
	}

})();
