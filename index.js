const express = require('express')
const app = express()
const port = process.env.PORT || 3001 // Use port 3000 by default, or an environment variable if available

// Serve static files from a directory (in this case, your HTML file)
app.use(express.static(__dirname))

// Define a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
