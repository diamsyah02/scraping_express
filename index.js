const express = require('express')
const app = express()
const port = 7000
const util = require('./utils')

app.get('/', async (req, res) => {
  res.send(`Latihan Scraping Data dengan Node JS`)
})

app.get(`/search`, async (req, res) => {
  const result = await util.brokeDataSearch(`search/searchall?query=${req.query.keyword}&page=${req.query.page}`)
  res.status(200).send(result)
})

app.get(`/edu`, async (req, res) => {
  const result = await util.brokeDataEdu(`edu`)
  res.status(200).send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})