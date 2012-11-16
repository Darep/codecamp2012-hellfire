define(['jquery', 'backbone'], function($, Backbone){

    var Model = Backbone.Model.extend({

        defaults: {
            id: "Helsinki",
            name: "Helsinki"
        },

        initialize: function () {
            this.set({ id: this.defaults.id });
            this.set({ name: this.defaults.name });
        }
    });

    return new Model();
});
