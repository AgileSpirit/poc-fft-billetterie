var app = app || {};

(function () {

  'use strict';

  app.ProductCollectionView = Backbone.View.extend({

    el: '#product-list',

    tagName: 'ul',

    initialize: function () {
      this.model = new app.ProductCollection();
      this.model.reset(
        [{
          "name": "Billet - Tournoi",
          "description": "L’offre classique de billetterie pour le tournoi : l'intensité des matchs, sur le court de votre choix",
          "price": "A partir de 85€"
        }, {
          "name": "Billet - Qualif",
          "description": "L’accès au prélude du tournoi, pour encourager les espoirs du tennis mondial",
          "price": "A partir de 125€"
        }, {
          "name": "Billet - Visiteurs du Soir",
          "description": "Venez découvrir l’ambiance unique de Roland-Garros en soirée",
          "price": "A partir de 250€"
        }, {
          "name": "Billet - Trophée des Légendes Perrier",
          "description": "Redécouvrez les légendes vivantes du tennis",
          "price": "A partir de 175€"
        }, {
          "name": "Offre - Découverte",
          "description": "Découvrez les courts et la Brasserie des Jardins Gourmets",
          "price": "A partir de 175€"
        }, {
          "name": "Offre - Emotion",
          "description": "Goûtez à l'émotion des loges et d'un réceptif privatif",
          "price": "A partir de 330€"
        }, {
          "name": "Offre - Elegance",
          "description": "L'élégance des salons d'exception de Roland-Garros",
          "price": "A partir de 350€"
        }, {
          "name": "Offre - Passion",
          "description": "Vivez le tournoi sous un nouveau jour, en exclusivité",
          "price": "A partir de 515€"
        }]
      );

      this.listenTo(this.model, "change", this.render);
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