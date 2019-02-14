const Product = require('../models/product')

exports.getProducts = (req, res, next) => {
    Product.fetchAll()
        .then(products => {
            res.render('shop', {
                prods: products,
                pageTitle: 'Shop',
                path: '/'
        })
    })
}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    // Product.findAll({ where: { id: prodId } })
    //   .then(products => {
    //     res.render('shop/product-detail', {
    //       product: products[0],
    //       pageTitle: products[0].title,
    //       path: '/products'
    //     });
    //   })
    //   .catch(err => console.log(err));
    Product.findById(prodId)
      .then(product => {
        res.render('shop/product-detail', {
          product: product,
          pageTitle: product.title,
          path: '/products'
        });
      })
      .catch(err => console.log(err));
  };

exports.getIndex = (req, res, next) => {
    Product.fetchAll()
      .then(products => {
        res.render('shop/index', {
          prods: products,
          pageTitle: 'Shop',
          path: '/'
        });
      })
      .catch(err => {
        console.log(err);
      });
  };