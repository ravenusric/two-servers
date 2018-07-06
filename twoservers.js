var http = require("http");

// My 2 servers
var PORT1 = 7000; //Use this port for good vibes
var PORT2 = 7500; // use this port for bad vibes

// Create a generic function to handle requests and responses
function goodVibes(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("Oh the power that you yield is so Dreamy!!!: " + request.url);
  }
// Use the Node HTTP package to create our server.
// Pass the goodVibes function to empower it with functionality.
var server1 = http.createServer(goodVibes);

// Start our server1 so that it can begin listening to client requests.
server1.listen(PORT1, function() {

  // Log (server1-side) when our server1 has started
  console.log("server1 listening on: http://localhost:" + PORT1);
});
  
// Create a generic function to handle requests and responses
function badVibes(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("Oh how I loathe you!: " + request.url);
  }
// Use the Node HTTP package to create our server.
// Pass the badVibes function to empower it with functionality.
var server2 = http.createServer(badVibes);

// Start our server2 so that it can begin listening to client requests.
server2.listen(PORT2, function() {

  // Log (server2-side) when our server2 has started
  console.log("Server listening on: http://localhost:" + PORT2);
});


