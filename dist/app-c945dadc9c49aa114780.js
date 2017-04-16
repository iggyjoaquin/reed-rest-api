webpackJsonp([0],[function(e,t,n){"use strict";e.exports={environment:"PROD",development_server:"http://localhost:8000",production_server:"http://52.203.252.83:8000"}},,,,,function(e,t){},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),o="DEV"===s.environment?s.development_server:s.production_server;t.AuthService=function(){function e(t,n,r){a(this,e),this.$http=t,this.$state=n,this.jwtHelper=r}return e.$inject=["$http","$state","jwtHelper"],r(e,[{key:"signup",value:function(e,t){var n=this,a={name:e,password:t};this.$http.post(o+"/api/signup",a).then(function(e){var t=e.status,a=e.data.success,r=e.data.token;200===t&&a?(localStorage.setItem("reed-token",r),n.$state.go("dashboard")):console.log("There was some error creating a user.")})}},{key:"login",value:function(e,t){var n=this,a={name:e,password:t};this.$http.post(o+"/api/login",a).then(function(e){if(200===e.status&&e.data.success){var t=e.data.token;localStorage.setItem("reed-token",t),n.$state.go("dashboard")}})}},{key:"logout",value:function(){localStorage.removeItem("reed-token"),this.$state.go("login")}},{key:"validateUserToken",value:function(){var e=localStorage.getItem("reed-token");if(void 0!==e&&null!==e){var t=this.jwtHelper.decodeToken(e)._doc;if(t)return t;this.$state.go("login")}else this.$state.go("login")}}]),e}()},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),o=("DEV"===s.environment?s.development_server:s.production_server,function(){function e(t,n,r){if(a(this,e),this.$state=n,this.message="dashboard",this.data=n.current.data,this.$http=t,this.Auth=r,this.data.authRequired){var s=this.Auth.validateUserToken();this.user=s}this.contentLoaded()}return e.$inject=["$http","$state","Auth"],r(e,[{key:"contentLoaded",value:function(){}}]),e}());t.Dashboard={template:n(18),controller:o}},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),o=("DEV"===s.environment?s.development_server:s.production_server,function(){function e(t,n,r){a(this,e),this.$state=n,this.username="",this.password="",this.message="login",this.data=n.current.data,this.$http=t,this.Auth=r}return e.$inject=["$http","$state","Auth"],r(e,[{key:"login",value:function(e){e.preventDefault(),this.Auth.login(this.username,this.password)}}]),e}());t.Login={template:n(19),controller:o}},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),o=("DEV"===s.environment?s.development_server:s.production_server,function(){function e(t,n){a(this,e),this.$state=t,this.message="logout",this.data=t.current.data,this.Auth=n,this.logout()}return e.$inject=["$state","Auth"],r(e,[{key:"logout",value:function(){this.Auth.logout()}}]),e}());t.Logout={template:n(20),controller:o}},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function e(t,n,r){a(this,e),this.$state=n,this.$location=r,this.message="profile",this.data=n.current.data,this.$http=t};r.$inject=["$http","$state","$location"];t.NotFound={template:n(21),controller:r}},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),o="DEV"===s.environment?s.development_server:s.production_server,i=function(){function e(t,n,r){a(this,e),this.$state=n,this.$location=r,this.message="profile",this.data=n.current.data,this.$http=t,this.findUser()}return e.$inject=["$http","$state","$location"],r(e,[{key:"findUser",value:function(){var e=this,t=this.$location.$$url,n=t.substring(2,t.length),a=o+"/api/user/"+n;this.$http.get(a,{headers:{"x-access-token":localStorage.getItem("reed-token")}}).then(function(t){t.data.userNotFound?e.$state.go("notFound"):e.profileUser=t.data})}}]),e}();t.Profile={template:n(22),controller:i}},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),o="DEV"===s.environment?s.development_server:s.production_server,i=function(){function e(t,n){a(this,e),this.$state=n,this.searchQuery="",this.data=n.current.data,this.$http=t,this.allUsers=[],this.getAllUsers()}return e.$inject=["$http","$state"],r(e,[{key:"getAllUsers",value:function(){var e=this;this.$http.get(o+"/api/allUsers",{headers:{"x-access-token":localStorage.getItem("reed-token")}}).then(function(t){e.allUsers=t.data})}},{key:"goToProfile",value:function(e){this.$state.go("profile")}}]),e}();t.Search={template:n(23),controller:i}},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),o=("DEV"===s.environment?s.development_server:s.production_server,function(){function e(t,n,r){a(this,e),this.$state=n,this.username="",this.password="",this.password2="",this.Auth=r,this.data=n.current.data,this.$http=t}return e.$inject=["$http","$state","Auth"],r(e,[{key:"signup",value:function(e){e.preventDefault(),this.Auth.signup(this.username,this.password)}}]),e}());t.Signup={template:n(24),controller:o}},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),o="DEV"===s.environment?s.development_server:s.production_server,i=function(){function e(t,n,r){a(this,e),this.$state=n,this.title="",this.$location=r,this.$http=t,this.lists=[],this.getLists()}return e.$inject=["$http","$state","$location"],r(e,[{key:"getLists",value:function(){var e=this;this.$http.get(o+"/api/lists").then(function(t){console.log(t),e.lists=t.data})}},{key:"submit",value:function(e){e.preventDefault();var t={title:this.title};this.$http.post(o+"/api/lists",t).then(function(e){e.data.success&&(alert("List saved!"),location.reload())})}}]),e}();t.TempHome={template:n(25),controller:i}},function(e,t,n){"use strict";function a(e,t,n){n.html5Mode(!0).hashPrefix("!"),t.otherwise("/"),e.state("app",{url:"/",redirectTo:"tempHome"}).state("dashboard",{url:"/dashboard",component:"dashboard",data:{authRequired:!0}}).state("login",{url:"/login",component:"login",data:{authRequired:!1}}).state("logout",{url:"/logout",component:"logout",data:{authRequired:!1}}).state("signup",{url:"/signup",component:"signup",data:{authRequired:!1}}).state("search",{url:"/search",component:"search",data:{authRequired:!0}}).state("notFound",{url:"/404",component:"notFound",data:{authRequired:!1}}).state("tempHome",{url:"/tempHome",component:"tempHome",data:{authRequired:!1}}).state("profile",{url:"/:userId",component:"profile",data:{authRequired:!0}})}a.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},,,function(e,t){e.exports='<nav class="reed-nav navbar navbar-default">\n    <div class="reed-nav-container-fluid container-fluid">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="reed-brand navbar-brand" href="#">Reed</a>\n        </div>\n\n\n        <div class="collapse navbar-collapse reed-navbar-collapse" id="bs-example-navbar-collapse-1">\n            <!-- <ul class="nav navbar-nav">\n                <li><a href="#">Link</a></li>\n            </ul> -->\n            <ul class="nav navbar-nav navbar-right">\n                <li><a class="reed-nav-link" ui-sref="dashboard">Feed</a></li>\n                <li><a class="reed-nav-link" ui-sref="search">Search</a></li>\n                <li><a class="reed-nav-link" ui-sref="logout">Logout</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<h1> {{$ctrl.message}} </h1>\n'},function(e,t){e.exports='<nav class="reed-nav navbar navbar-default">\n    <div class="reed-nav-container-fluid container-fluid">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="reed-brand navbar-brand" href="#">Reed</a>\n        </div>\n\n\n        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n            <!-- <ul class="nav navbar-nav">\n                <li><a href="#">Link</a></li>\n            </ul> -->\n\n            <ul class="nav navbar-nav navbar-right">\n                <li><a class="reed-nav-link" ui-sref="login">Login</a></li>\n                <li><a class="reed-nav-link" ui-sref="signup">Signup</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<div class="login-view">\n    <center>\n        <form class="auth-form" ng-submit="$ctrl.login($event)">\n            <input class="hide-chrome-autofill" type="text" name="" value="">\n            <input class="hide-chrome-autofill" type="password" name="" value="">\n\n            <input ng-model="$ctrl.username" class="reed-input login-input" type="text" name="username" placeholder="Username">\n            <input ng-model="$ctrl.password" class="reed-input login-input" type="password" name="password" placeholder="Password">\n            <input id="loginButton" type="submit" value="Login">\n        </form>\n    </center>\n</div>\n'},function(e,t){e.exports=""},function(e,t){e.exports="<h1>404</h1>\n"},function(e,t){e.exports="<div ng-include=\"'app/components/dashboardNavbar/dashboard_navbar.html'\"></div>\n<h1> {{$ctrl.profileUser.username}} </h1>\n"},function(e,t){e.exports='<div ng-include="\'app/components/dashboardNavbar/dashboard_navbar.html\'"></div>\n<div class="search-view">\n    <input id="searchInput" type="text" name="search" ng-model="$ctrl.searchQuery" ng-change="$ctrl.searchForUsers()" placeholder="Search">\n\n    <div class="search-results">\n\n        <center>\n            <p id="noResultsMessage" ng-if="$ctrl.searchQuery.length > 0 && ($ctrl.allUsers | filter: $ctrl.searchQuery).length === 0">No results.</p>\n        </center>\n\n        <!--  ng-if="$ctrl.searchQuery.length > 0"  -->\n        <div ng-click="$ctrl.goToProfile(user)" class="search-results-banner" ng-repeat="user in $ctrl.allUsers | filter: $ctrl.searchQuery | limitTo : 15 ">\n            <p>@{{user.name}}</p>\n        </div>\n    </div>\n</div>\n'},function(e,t){e.exports='<nav class="reed-nav navbar navbar-default">\n    <div class="reed-nav-container-fluid container-fluid">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="reed-brand navbar-brand" href="#">Reed</a>\n        </div>\n\n\n        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n            <!-- <ul class="nav navbar-nav">\n                <li><a href="#">Link</a></li>\n            </ul> -->\n\n            <ul class="nav navbar-nav navbar-right">\n                <li><a class="reed-nav-link" ui-sref="login">Login</a></li>\n                <li><a class="reed-nav-link" ui-sref="signup">Signup</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<div class="signup-view">\n    <center>\n        <form class="auth-form" ng-submit="$ctrl.signup($event)">\n            <input ng-model="$ctrl.username" class="reed-input login-input" type="text" name="username" placeholder="Username">\n            <input ng-model="$ctrl.password" class="reed-input login-input" type="password" name="password" placeholder="Password">\n            <input ng-model="$ctrl.password2" class="reed-input login-input" type="password" name="password" placeholder="Re-type password">\n            <input id="signupButton" type="submit" value="Sign up">\n        </form>\n    </center>\n</div>\n'},function(e,t){e.exports='<div id="tempIdArticles">\n    <p>Current list titles</p>\n\n    <p ng-repeat="list in $ctrl.lists"> {{list.listTitle}} </p>\n</div>\n\n<form class"auth-form" ng-submit="$ctrl.submit($event)" method="POST">\n    <input ng-model="$ctrl.title" class="login-input" type="text" placeholder="New list title">\n    <button id="loginButton" type="submit" name="button">Submit</button>\n</form>\n'},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(1),s=a(r),o=n(7),i=n(8),l=n(9),u=n(13),c=n(12),p=n(11),d=n(10),h=n(14),v=n(6);n(3),n(2);var f=n(15),g=a(f);n(5),s.default.module("app",["ui.router","angular-jwt"]).config(g.default).component("dashboard",o.Dashboard).component("login",i.Login).component("signup",u.Signup).component("search",c.Search).component("profile",p.Profile).component("logout",l.Logout).component("notFound",d.NotFound).component("tempHome",h.TempHome).service("Auth",v.AuthService)}],[26]);