//importar plugins
const express = require('express');
const server = express();
const path = require('path');
const pages = require('./pages.js');

server.use(express.urlencoded({extended:true}))


server.use(express.static('public'))

.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
// criar rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('./save-orphanage', pages.saveOrphanage)
// ligar
server.listen(5500)