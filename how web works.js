/*how web works
what is HTTP ?
    Hyper Text transfer protocol is what governs how clients transfer data to and from a server

What is a URL
    a Uniform Resource Locator is an address for an internet resource

What is DNS
    A domain Name System is the system that takes human readable URLS and translates them into ip addresses

what is a query string ?
    A query string allows you to input key - value pairs into the URL

List two HTTP Verbs and their uses
GET - gets data from server
POST - posts data from server

What is an HTTP request
    a request from a client to a server which follows the http protocol

what is an http response ?
    An HTTP response is a response from a server to a client which follows the http protocol

What is an HTTP header? Give a couple examples of request and response headers you have seen.
    Headers provide additional info about the request or the response. some examples of these are as follows
    request headers: host, user-agent, accept, cookie
    respose headers: content-type, last-modified, set-cookie, cache-control

What happens when you type a URL in a browser
    your browser 'resolves' the name into an ip address using DNS
    your browser makes a request to that ip address, including headers.
    the server sends a response
    the browser makes a DOM from that HTML, and finds any other resources needed
    the browser makes separate http requst for those resources and recieves response from the server for each.

    "my sea sickness comes in waves"