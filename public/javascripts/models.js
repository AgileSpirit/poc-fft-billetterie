var app = app || {};

(function () {

  'use strict';

// Product Model
// =============
  app.Product = Backbone.Model.extend({

    defaults: {
      name: null,
      description: null,
      price: null
    }

  });

// Product Collection
// ==================
  app.ProductCollection = Backbone.Collection.extend({

    model: app.Product,
    url: '/assets/products.json'
  });


})();

