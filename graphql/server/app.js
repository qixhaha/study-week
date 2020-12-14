const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/schema')
const cors = require('cors')
const app = express()
app.use(cors())
mongoose.connect(
  'mongodb://admin:123456@10.1.5.94:27017/graphql?authSource=admin',
  {
    useNewUrlParser: true,
    // auth: { authSources: "admin" },
    // user: "test",
    // pass: "123456",
    // useMongoClient: true,
  }
)
mongoose.connection.once('open', () => {
  console.log('connected to database')
})
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(5000, () => {
  console.log('now listening for requests on port 5000')
})
