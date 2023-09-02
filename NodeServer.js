const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write(
            "<body><form action='/message' method='POST'><input type='text' name='message'><button type = 'submit'>Send</button></form></body>"
        );
        res.write("</html>");
        return res.end();
    } else if (url === "/home") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write("<body><h1>WELCOME HOME</h1></body>");
        res.write("</html>");
        return res.end();
    } else if (url === "/about") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write("<body><h1>WELCOME TO ABOUT US PAGE</h1></body>");
        res.write("</html>");
        return res.end();
    } else if (url === "/node") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write("<body><h1>WELCOME TO MY NODE JS PROJECT</h1></body>");
        res.write("</html>");
        return res.end();
    }
    // res.setHeader("Content-Type", "text/html");
    // res.write("<html>");
    // res.write("<head><title>My First Page</title></head>");
    // res.write("<body><h1>WELCOME TO MY NODE JS PROJECT</h1></body>");
    // res.write("</html>");
    // res.end();
});

server.listen(4000);
