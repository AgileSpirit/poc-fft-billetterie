var app = app || {};

(function () {
  'use strict';

  app.models.Product = Backbone.Model.extend({

    defaults: {
      name: '',
      description: '',
      price: ''
    },

    select: function() {
      console.log("Le produit " + this.name + " a été sélectionné !");
    }

  });

})();
