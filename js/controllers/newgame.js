module.exports = {
    name: 'NewGameController',
    func: function ($scope, NewGameService) {
        $scope.startNew = function () {
            NewGameService.startNew($scope.name);
        }
    }
}