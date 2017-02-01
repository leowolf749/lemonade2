module.exports = {
    name: 'MyStandController',
    func: function($scope, StandService) {
        $scope.log = StandService.getLog();

    },
};