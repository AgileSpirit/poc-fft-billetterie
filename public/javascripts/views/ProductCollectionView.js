var app = app || {};

(function () {

  'use strict';

  app.ProductCollectionView = Backbone.View.extend({

    el: '#product-list',

    tagName: 'ul',

    initialize: function () {
        console.log("product collection view sir");
      this.listenTo(this.model, "reset", this.render);
    },

    render: function () {
      this.$el.html();

      for (var i = 0; i < this.model.length; ++i) {
        var productView = new app.ProductView({model: this.model.at(i)});
        this.$el.append(productView.$el);
        productView.render();
      }

      return this;
    }

  });

})();