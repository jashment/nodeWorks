const Product = require('../models/product')

exports.getProducts = (req, res, next) => {
    Product.fetchAll()
        .then(products => {
            res.render('shop', {
                prods: products,
                pageTitle: 'All Animals',
                path: '/'
        })
    })
}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId
    Product.findById(prodId)
      .then(product => {
        res.render('shop/product-detail', {
          product: product,
          pageTitle: product.title,
          path: '/products'
        })
      })
      .catch(err => console.log(err))
  }

exports.getIndex = (req, res, next) => {
    Product.fetchAll()
      .then(products => {
        res.render('shop/index', {
          prods: products,
          pageTitle: 'All Animals',
          path: '/'
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  exports.getCart = (req, res, next) => {
    req.user
      .getCart()
      .then(cart => {
        return cart
          .getProducts()
          .then(products => {
            res.render('shop/cart', {
              path: '/cart',
              pageTitle: 'Your Cart',
              products: products
            })
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  exports.postCart = (req, res, next) => {
    const prodId = req.body.productId
    Product.findById(prodId).then(product => {
        return req.user.addToCart(product)
    }).then(result => {
        console.log(result)
    })

   }