angular.module('app', ['components'])

.controller('BeerCounter', function($scope) {
  $scope.beers = [0, 1, 2, 3, 4, 5, 6];

  $scope.beerForms = {
    0: 'no beers',
    one: '{} beer',
    other: '{} beers'
  };
})
;
