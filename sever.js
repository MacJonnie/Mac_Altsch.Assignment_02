const http = require('http')


const action = (req, res) => {
    if (req.method === "GET" && req.url === '/books') {
        res.write('Hello, My Name Is John');
    }
    if (req.method === "PUT" && req.url === '/books') {
        res.write('Hello, find some interesting books');
    }
    if (req.method === "DELETE" && req.url === '/books') {
        res.write('Hello, resource has been removed');
    }
    if (req.method === "GET" && req.url === '/books/author/') {
        res.write('Hello, see names of the books and authors');
    }
    if (req.method === "POST" && req.url === '/books/author/') {
        res.write('Hello, explore our world of beautiful books');
    }
    if (req.method === "PUT" && req.url === '/books/author/') {
        res.write('Hello, you have just added a new resource');
    }
    res.end();
}


const sever = http.createServer(action);

sever.listen(8900, () => {
    console.log(`listening on port 8900...`)
});
