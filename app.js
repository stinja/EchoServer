const express = require('express') // Defines express as a value to require express as a dependency
const app = express() // Assigns the value of express above to app
const port = process.env.port || 3000 // Uses port requested when running port=xxxx node app.js XOR Assings the value of 3000 to port

app.get('/', (req, res) => { // Creates an app, takes in the values of req and res which are assigned in the query string
  var someVar = (req.query.foo) // Create variables and assigns value of key "foo"
  console.log(someVar) // Shows value of someVar in console, just a variable check for learning
  //someVar = JSON.stringify(someVar) // Uncomment if wanting to display both the key and value
  res.send('Response: ' + someVar) // Responds by sending a string, verifying that it took the request + also prints out the value of someVar inside app
})

app.listen(port, () => { // Function to listen on port assigned above in const port = 3000
  console.log(`Example app listening at http://localhost:${port}`) // Confirms that app.listen is listening on the assigned port by printing out a statement in the console
})


/**
 * Additional Notes
 * 
 * a JSON object
 * { key: value }
 * 
 * ? is a delimeter which marks the beginning of a query string
 * 
 * ?foo=bar is a query string which creates an object with foo as the key and bar as the value
 */