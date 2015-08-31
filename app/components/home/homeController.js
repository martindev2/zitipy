
app.controller('homeController', function($scope, $http, $location){

    $scope.performSearch = function() {

        $scope.searches.push($scope.searchInput);

        $location.path('/search/'+$scope.searchInput);

    };

});