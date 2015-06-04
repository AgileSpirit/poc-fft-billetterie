var app = app || {};

(function () {

  'use strict';

  app.ProductView = Backbone.View.extend({

    tagName: 'li',

    className: 'col-md-4 product-item',

    template: _.template($('#product-item').html()),

    initialize: function () {
      this.listenTo(this.model, "change", this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }

  });

})();