const http = require('http')

const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const mongoConnect = require('./utilities/database').mongoConnect

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

//const adminRoutes = require('./routes/admin')
//const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))



//app.use('/admin', adminData.routes)
//app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).render('page-not-found', { pageTitle: 'Page Not Found'})
})

mongoConnect(() => {
    app.listen(3000)
})

