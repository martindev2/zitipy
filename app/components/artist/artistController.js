
app.controller('artistController', function($scope, $http, $location, $routeParams){
   

    if ($routeParams.artistId){
        $http.get("https://api.spotify.com/v1/artists/" + $routeParams.artistId)
            .success(function(response){$scope.artist = response; });

        $http.get("https://api.spotify.com/v1/artists/" + $routeParams.artistId + "/albums")
            .success(function(response){$scope.albums = response; });

        $http.get("https://api.spotify.com/v1/artists/" + $routeParams.artistId + "/top-tracks?country=GB")
            .success(function(response){$scope.topTracks = response; console.log(response)});

        $http.get("https://api.spotify.com/v1/artists/" + $routeParams.artistId + "/related-artists")
            .success(function(response){$scope.related = response.artists;});
    }

/*
    $scope.performSearch = function() {

        $http.get("https://api.spotify.com/v1/search?q=" +
            $scope.searchInput + "&type=artist,album")
            .success(function(response){$scope.artists = response.artists;});
    };
*/

});
