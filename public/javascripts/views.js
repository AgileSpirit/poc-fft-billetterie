var app = app || {};

app.ProductView = Backbone.View.extend({

  tagName: 'li',

  template: _.template($('#product-item').html()),

  initialize: function () {
    this.listenTo(this.model, "change", this.render);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

app.ProductCollectionView = Backbone.View.extend({

  tagName: 'ul',

  initialize: function () {
    this.listenTo(this.model, "change", this.render);
  },

  render: function () {
    this.$el.html(); // lets render this view

    for (var i = 0; i < this.model.length; ++i) {
      // lets create a book view to render
      var productView = new app.ProductView({model: this.model.at(i)});

      // lets add this book view to this list view
      this.$el.append(productView.$el);
      productView.render(); // lets render the book
    }

    return this;
  }

});

app.StoreView = Backbone.View.extend({

  el: '#store',

  initialize: function () {
    var productCollection = new app.ProductCollection();
    this.productCollectionView = new app.ProductCollectionView({model: productCollection});
    productCollection.reset(
      [{
        "name": "Tournoi",
        "description": "L’offre classique de billetterie pour le tournoi : l'intensité des matchs, sur le court de votre choix",
        "price": "A partir de 85€"
      }, {
        "name": "Qualif",
        "description": "L’accès au prélude du tournoi, pour encourager les espoirs du tennis mondial",
        "price": "A partir de 125€"
      }, {
        "name": "Visiteurs du Soir",
        "description": "Venez découvrir l’ambiance unique de Roland-Garros en soirée",
        "price": "A partir de 250€"
      }, {
        "name": "Trophée des Légendes Perrier",
        "description": "Redécouvrez les légendes vivantes du tennis",
        "price": "A partir de 175€"
      }]
    );
    this.render();
  },

  render: function () {
    this.productCollectionView.render();
  }

});
