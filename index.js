require('dotenv').config(); 
const express = require('express')// This is a common express 
// Module express is like- import express from 'express'
const app = express()
const port = 3000
// From an estimate there is 6530 ports available for use & port 3000 is one of them

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About Us')
})

app.get('/login', (req, res) => {
    res.send('Login Successfull')
    // You need to restart the server to see the changes for '/login'
})

app.get('/instagram', (req, res) => {
    res.send('Social Media Platform for Celebrities')
    // You need to restart the server to see the changes for any new route like- '/login' '/instagram'
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})