var app = app || {};

(function () {
  'use strict';

  var Products = Backbone.Collection.extend({
    model: app.models.Product
  });

  app.products = new Products();

})();

