(function(){
"use strict";
angular.module("frontpress.componentes.frontpress-provider", [])
.constant("FrontpressConfig", {
  "restApiUrl": "https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com",
  "pageSize": "5",
  "disqusShortname": "jotateles",
  "overrides": {
    "title": "Teste de título com override"
  }
});

})();