
const app = angular.module('LemonadeApp', ['ui.router']);

app.config(function ($stateProvider) {
    $stateProvider.state({
        name: 'new-game',
        url: '/new-game',
    });

    $stateProvider.state({
        name: 'stand-manager',
        url: '/stand',
    });

    $stateProvider.state({
        name: 'high-scores',
        url: '/high-scores',
    });
});