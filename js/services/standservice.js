module.exports = {
    name: 'StandService',
    func: function ($http, NewGameService) {
        // const log = [            
        //     { label: 'DAY', value: 1},
        //     { label: 'MONEY', value: '$' + 10},
        //     { label: 'VISITORS', value: 10},
        //     { label: 'CUSTOMERS', value: 0},
        // ];

        return {
            getStandInfo() {
                 $http.get('https://blooming-hamlet-70507.herokuapp.com/stand' + NewGameService.getStandId(standId));
            },
        };

    },


}