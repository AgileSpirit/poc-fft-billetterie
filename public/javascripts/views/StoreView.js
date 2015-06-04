var app = app || {};

(function () {

  'use strict';

  app.StoreView = Backbone.View.extend({

    el: '#store',

    initialize: function () {
//      var productCollection = new app.ProductCollection();
      this.productCollectionView = new app.ProductCollectionView();
//      this.productCollectionView = new app.ProductCollectionView({model: productCollection});
//      productCollection.fetch();

      this.render();
    },

    render: function () {
      this.productCollectionView.render();
    }

  });

})();
