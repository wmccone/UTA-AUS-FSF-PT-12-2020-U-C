var formEL = document.querySelector("#input")
var dataVal = document.querySelector("#input").value
// Dependencies


const http = require('http');
const index = require('./index.html');

const PORT = 8080;

const handleRequest = (req, res) => {
  // Saving the request data as a variable
  let formData = '';

  // When the server receives data...
  req.on('data', (dataVal) => {
    // Add it to requestData.
    formData += dataVal;
  });

  // When the request has ended...
  req.on('end', () => {
    // Log (server-side) the request method, as well as the data received!
    console.log(`You did a ${req.method}, with the data:\n, ${requestData}`);
    res.end();
  });
};

// Create the server, assign it to a variable called "server"
const server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});