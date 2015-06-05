var app = app || {};

(function () {

  'use strict';

  app.StoreView = Backbone.View.extend({

    el: '#store',

    initialize: function (productCollectionView) {
        this.productCollectionView = productCollectionView;
    },

    render: function () {
      this.productCollectionView.render();
    }

  });

})();
