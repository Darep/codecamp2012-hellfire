define(['jquery', 'jquery_ui', 'backbone', 'hellfire/models/slider'], function ($, jQueryUI, Backbone, SliderModel) {

    var View = Backbone.View.extend({
        el: '#slider',

        initialize: function () {
            this.model = SliderModel;

            var self = this;
            $(this.el).slider({
                orientation: 'horizontal',
                value: 2012,
                max: 4012,
                min: 2012,
                step: 100,
                slide: function (event, ui) {
                    self.model.set({year: ui.value});
                    console.log(ui.value);
                },
                stop: function (event, ui) {
                    //self.model.set({year: ui.value});
                }
            });
        },

        render: function () {
            // do nothing.
        }
    });

    return new View();
});
