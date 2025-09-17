const http = require('http');
const server = http.createServer((req, res) => {
    let a = 2;
    let b = 3;
    let sum = a + b;
    res.end(`The sum of ${a} and ${b} is ${sum}`);
});
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
