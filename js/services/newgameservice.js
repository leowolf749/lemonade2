module.exports = {
    name: 'NewGameService',
    func: function ($http) {
        let standId = null;

        return {
            startNew(name) {
                $http.post('https://blooming-hamlet-70507.herokuapp.com/stand', {
                    stand_name: name,
                }).then(function (response){
                    console.log(response)
                    standId = response.data.stand_id;
                });

            },

            getStandId(id) {
                
            },
        }
    },
}