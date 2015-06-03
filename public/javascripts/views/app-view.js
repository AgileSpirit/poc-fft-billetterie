// views/products.js
var app = app || {};

(function ($) {
  'use strict';

  app.AppView = Backbone.View.extend({

    el: '#store',

    initialize: function () {
      this.render();
    },

    render: function () {
      //this.$el.html('Hello world !');
    }
  });

})(jQuery);