module.exports = {
    name: 'MyStandController',
    func: function($scope, StandService) {
        $scope.getStandInfo = function () {
            StandService.getStandInfo();
        };
        $scope.getData = function () {
            StandService.getData();
        };

    },
};