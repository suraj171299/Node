const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        fs.readFile("message.txt", (error, data) => {
            if (error) {
                console.log(error);
            }
            res.write("<html>");
            res.write("<head><title>Enter Message</title></head>");
            res.write(`<body>${data}</body>`);
            res.write(
                "<body><form action='/message' method='POST'><input type='text' name='message'><button type = 'submit'>Send</button></form></body>"
            );
            res.write("</html>");
            return res.end();
        });
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
    } else if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFile("message.txt", message, (err) => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }
    // res.setHeader("Content-Type", "text/html");
    // res.write("<html>");
    // res.write("<head><title>My First Page</title></head>");
    // res.write("<body><h1>WELCOME TO MY NODE JS PROJECT</h1></body>");
    // res.write("</html>");
    // res.end();
};

module.exports = {
    handler: requestHandler,
};
