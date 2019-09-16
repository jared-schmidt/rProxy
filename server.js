const express = require('express')
const port = process.env.PORT || 8080
const app = express()
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();

const TARGET = 'http://localhost:5000';

// proxy
app.all('*', (req, res) => {
  console.log('redirecting ' + req.originalUrl)
  apiProxy.web(req, res, { target: TARGET }, (e) => { })
})

// start server
const server = app.listen(port, () => {
  let host = server.address().address
  console.log('Listening at http://%s:%s', host, port)
})