// Require/import the HTTP module
const http = require('http');

// Define a port to listen for incoming requests
const PORT1 = 7500;
const PORT2 = 7000;

// Create a generic function to handle requests and responses
const handleRequest = (request, response) => {
  // Send the below string to the client when the user visits the PORT URL
  response.end(`It Works!! Path Hit: ${request.url}`);
};

const handleRequestTwo = (request, response) => {
    // Send the below string to the client when the user visits the PORT URL
    response.end(`It Works as well!! Path Hit: ${request.url}`);
  };

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server = http.createServer(handleRequest);
const secondServer = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
server.listen(PORT1, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT1}`);
});

secondServer.listen(PORT2, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT2}`);
  });
