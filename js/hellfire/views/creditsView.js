define(
    [
        'jquery',
        'backbone'
    ],
    function($, Backbone){

        var View = Backbone.View.extend({
            el: '#credits',

            initialize: function() {
                console.log('credits init');
                // TODO: initialize model

                // TODO: bind events
            },

            render: function() {
                console.log('credits rend');
                // TODO: render view
                $('body').append(this.el);
            }
        });

        return new View();
    }
);
