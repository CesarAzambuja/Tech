const express = require('express')
const nunjucks = require('nunjucks')

const videos = require('./data')
const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')
nunjucks.configure("views", {
    express: server,
    autoescape:false,
    noCache: true
})

server.get("/", (req, res) => {
    return res.render('sobre')

})

server.get("/projetos", (req, res) => {
    return res.render('projetos', {items: videos})
    
})

server.listen(3300, () => {
    console.log("Servidor Online")
})