const express = require('express')
const app = express(); 
const cors = require('cors');
const port = 5000;
const mongoDB = require('./db') 
const path = require('path')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send('Hello World!')  
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  
  next();
})
mongoDB();

app.use('/api', require('./Routes/CreateRecipe'))
app.use('/api', require('./Routes/AllRecipes'))
app.use('/api', require('./Routes/DeleteRecipe'))
app.use('/api', require('./Routes/UpdateRecipe'))

// app.use(express.static(path.join(__dirname, '../build')))

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"))
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})