const  express  = require('express')
const { router } = require('./src/routes/router')

const HOST = "localhost"
const PORT = 9000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
  console.log(`Server listening @ ${HOST}:${PORT}`);
});
app.use(router);

module.exports = app;