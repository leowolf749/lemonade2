module.exports = {
    name: 'StandService',
    func: function ($http) {
        const log = [            
            // { label: 'DAY', value: 1},
            // { label: 'MONEY', value: '$' + 10},
            // { label: 'VISITORS', value: 10},
            // { label: 'CUSTOMERS', value: 0},
        ];
        // $http.get('https://blooming-hamlet-70507.herokuapp.com').then(function (response){
        //     angular.copy(response.data.results, movies)
        // });
    
        return {
            getLog() {
                return log;
            },
        };

    },


}