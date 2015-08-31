
app.controller('searchController', function($scope, $http, $location, $routeParams){

    console.log($routeParams.searchQuery);

    if ($routeParams.searchQuery){

        $http.get("https://api.spotify.com/v1/search?q=" +
            $routeParams.searchQuery + "&type=artist,album")
            .success(function(response){$scope.artists = response.artists;});
    }

    $scope.viewArtist = function (index){
        $location.path('/artist/'+$scope.artists.items[index].id);
    };
});