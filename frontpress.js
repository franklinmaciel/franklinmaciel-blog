angular.module("myApp.config", [])
.constant("restApiUrl", "https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com")
.constant("pageSize", "5")
.constant("disqusShortname", "jotateles")
.constant("overrides", {
  "title": "Teste de título com override"
});
