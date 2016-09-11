/**
 * Created by xicunhan on 10/09/2016.
 */


var app = angular.module('flapperNews',['ui.router']);

app.factory('posts',[function (){
    var o = {
      posts:[]
    };

    return o;
}]);


app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){

        $stateProvider.state('home',{url:'/home',templateUrl:'/home.html', controller:'MainCtrl'});
        $stateProvider.state('posts',{
                url:'/posts/{id}',
                templateUrl:'posts.html',
                controller:'PostsCtrl'
            });
        $urlRouterProvider.otherwise('home');

    }
]);

app.controller('MainCtrl',[
    '$scope',
    'posts',
    function($scope,posts){

        $scope.posts=posts.posts;
/*
        $scope.posts=[
            {title: 'post 1', link: 'www.google.fr', upvotes:5},
            {title: 'post 2', upvotes:2},
            {title: 'post 3', upvotes:15},
            {title: 'post 4', upvotes:9},
            {title: 'post 5', upvotes:4},
            {title: 'post 6', upvotes:6}

        ];
*/

        $scope.addPost = function(){
            if(!$scope.title || $scope.title===''){
                return;
            } //eviter title blanche
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes:0,
                comments:[
                    {author: 'Joe', body: 'Coll post!', upvotes:0},
                    {author: 'Bob', body: 'Great ida but everything is wrong!', upvotes:0}
                ]

            });

            $scope.title = '';
            $scope.link = '';
        };
        $scope.incrementUpvotes = function(post){
            post.upvotes+=1;
        };
    }
]);
app.controller('PostsVtrl',[
    '$scope',
    '$stateParams',
    'posts',
    function($scope,$stateParams,posts){
        $scope.post = posts.posts[$stateParams.id];

        $scope.addComment = function(){
            if ($scope.body===""){return;}
            $scope.post.comments.push({
                body: $scope.body,
                author:'user',
                upvotes: 0
            });
            $scope.body ='';
        };

    }
]);