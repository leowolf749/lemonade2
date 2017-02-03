module.exports = {
    name: 'StandService',
    func: function ($http, NewGameService) {
        const data = [];

        return {
            getStandInfo() {
                 $http.get('https://blooming-hamlet-70507.herokuapp.com/stand/' + NewGameService.getStandId())
                 .then(function (response) {
                     data.push(response);
                     console.log(data);
                 });
                 
            },
        };

    },


}