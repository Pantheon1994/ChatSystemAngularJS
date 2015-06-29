angular.module('app').config([
    '$locationProvider', '$compileProvider', '$httpProvider', '$resourceProvider',
    function ($locationProvider, $compileProvider, $httpProvider, $resourceProvider) {

        $httpProvider.useApplyAsync(true);
        $compileProvider.debugInfoEnabled(true);
        $locationProvider.hashPrefix('!');
        $locationProvider.html5Mode(true);

        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
        $resourceProvider.defaults.stripTrailingSlashes = false;

    }
]);