const express = require('express') // Defines express as a value to require express as a dependency
const app = express() // Assigns the value of express above to app
const port = 3000 // Assings the value of 3000 to port

app.get('/', (req, res) => { // Creates an app, takes in the values of req and res which are assigned in the query string
  console.log(req.query.foo) // Prints requested query and the assigned value of foo from the query
  res.send('Hello World!') // Responds by sending a string, verifying that it took the request
})

app.listen(port, () => { // Function to listen on port assigned above in const port = 3000
  console.log(`Example app listening at http://localhost:${port}`) // Confirms that app.listen is listening on the assigned port by printing out a statement in the console
})