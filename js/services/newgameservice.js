module.exports = {
    name: 'NewGameService',
    func: function ($http) {
        return {
            startNew(name) {
                $http.post('https://blooming-hamlet-70507.herokuapp.com/stand', {
                    stand_name: name,
                });
            }
        }
    },
}