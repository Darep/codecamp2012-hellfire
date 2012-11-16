require.config({
    shim: {
        backbone: {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        },
        jquery_ui: {
            'deps': ['jquery'],
            'exports': 'Backbone'
        }
    },

    paths: {
        'jquery_ui': 'lib/jquery-ui-1.9.1.custom.min',
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
