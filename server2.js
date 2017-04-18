var http = require("http");

// Here we define a port to listen to

var PORT1 = 7000;
var PORT2 = 7500;


// Here we create a generic function to handle requests and responses
function handleRequest1(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
 response.end("It Works!! Path Hit: " + request.url + " You Rule!");
}

function handleRequest2(request, response) {

	response.end("It Works!! Path Hit: " + request.url + " You Suck!");

	var meanArray = ["You Suck!", "You Smell!", "You're not Tall!", 'Your hair looks crappy!'];

  	
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

// Here we start our server so that it can begin listening to client requests.
server1.listen(PORT1);

server2.listen(PORT2);