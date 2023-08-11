import http from "node:http";


const server = http.createServer((req, res)=> {

    const route = req.url;
    console.log("the requested route: ", route);

    if(route === "/api/hello") {
        const obj = {
            message: "Hi"
        }
        res.end(JSON.stringify(obj));
        return;
    }

    const obj = {
        messge: "Successful",
        status: 200
    }
    // const str = JSON.stringify(obj)
    res.end(JSON.stringify(obj));
});

server.listen(8080);
//localhost:8080