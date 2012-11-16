require.config({
    shim: {
        backbone: {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        }
    },

    paths: {
        'underscore': 'lib/underscore-min',
        'backbone': 'lib/backbone-min'
    },

    urlArgs: "timestamp=" + new Date().getTime(),

    // We will bail out instantly if there is error loading any script
    // (default is 7 seconds -> causes you to stare empty console)
    waitSeconds: 1
});

require(
    ['hellfire/routers/home', 'jquery'],
    function (router, $) {
        this.router = new router();
    }
);
