define(['jquery', 'jquery_ui', 'backbone', 'hellfire/models/slider'], function ($, jQueryUI, Backbone, SliderModel) {

    var DEFAULT_VALUE = 2012;

    var View = Backbone.View.extend({
        el: '#slider',

        initialize: function () {
            this.model = SliderModel;

            var self = this;
            $(this.el).slider({
                orientation: 'horizontal',
                value: DEFAULT_VALUE,
                max: 4012,
                min: 2012,
                step: 100,
                slide: function (event, ui) {
                    self.model.set({ year: ui.value });
                },
                stop: function (event, ui) {
                    //self.model.set({year: ui.value});
                }
            });
        },

        render: function () {
            // do nothing.
            this.model.set({ year: DEFAULT_VALUE });
        }
    });

    return new View();
});
