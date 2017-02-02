
const app = angular.module('LemonadeApp', ['ui.router']);

app.config(function ($stateProvider) {
    $stateProvider.state({
        name: 'new-game',
        url: '',
        component: 'newGame',
    });

    $stateProvider.state({
        name: 'stand-manager',
        url: '/stand',
        component: 'dayInfo',
    });

    $stateProvider.state({
        name: 'high-scores',
        url: '/high-scores',
    });
});

const controllers = [
    require('./controllers/newgame'),
    require('./controllers/mystand'),
    // require('./controllers/resources'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

const services = [
    require('./services/newgameservice'),
    require('./services/standservice'),
    // require('./services/resourcesservice'),
];

for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
};


app.component('dayInfo', {
    controller: 'MyStandController',
    templateUrl: 'templates/day-info.html',
    bindings: {
        stats: '<',
    },
});

app.component('newGame', {
    controller: 'NewGameController',
    templateUrl: 'templates/new-game.html',
});