(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

const app = angular.module('LemonadeApp', ['ui.router']);

app.config(function ($stateProvider) {
    $stateProvider.state({
        name: 'new-game',
        url: '',
        component: 'newGame',
    });

    // $stateProvider.state({
    //     name: 'stand-manager',
    //     url: '/stand',
    //     component: 'dayInfo',
    // });

    // $stateProvider.state({
    //     name: 'high-scores',
    //     url: '/high-scores',
    // });
});

const controllers = [
    require('./controllers/newgame'),
    // require('./controllers/mystand'),
    // require('./controllers/resources'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

const services = [
    require('./services/newgameservice'),
    // require('./services/standservice'),
    // require('./services/resourcesservice'),
];

for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
};


// app.component('dayInfo', {
//     controller: 'MyStandController',
//     templateUrl: 'templates/day-info.html',
//     bindings: {
//         stats: '<',
//     },
// });

app.component('newGame', {
    controller: 'NewGameController',
    templateUrl: 'templates/new-game.html',
})
},{"./controllers/newgame":2,"./services/newgameservice":3}],2:[function(require,module,exports){
module.exports = {
    name: 'NewGameController',
    func: function ($scope, NewGameService) {
        $scope.startNew = function () {
            NewGameService.startNew($scope.name);
        }
    }
}
},{}],3:[function(require,module,exports){
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
},{}]},{},[1]);
