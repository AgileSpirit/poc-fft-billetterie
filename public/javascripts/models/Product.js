var app = app || {};

(function () {
  'use strict';

  app.models.Product = Backbone.Model.extend({
    defaults: {
      name: '',
      description: '',
      reference: '',
      type: ''
    }
  });

})();
