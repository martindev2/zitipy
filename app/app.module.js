var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/home', {
            templateUrl : 'app/components/home/home.html',
            controller  : 'homeController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'app/components/about/about.html',
            controller  : 'aboutController'
        })
        // route for the artist page
        .when('/artist/:artistId', {
            templateUrl : 'app/components/artist/artist.html',
            controller  : 'artistController'
        })
        // route for the search page
        .when('/search/:searchQuery', {
            templateUrl : 'app/components/search/search.html',
            controller  : 'searchController'
        })
        .otherwise({redirectTo: '/home'});
});



