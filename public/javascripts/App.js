var app = app || {};

$(function () {

    'use strict';

    // kick things off by creating the `App`
    app.productCollection = new app.ProductCollection();
    var productCollectionView = new app.ProductCollectionView({model:app.productCollection});
    console.log("productCollectionView created");

    new app.Router();
    Backbone.history.start();
});