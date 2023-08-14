import http from "node:http";



const userList = [
    { name: "Susish", class: "MERN Stack" },
    { name: "Prateek", class: "AI" },
    { name: "Dawa", class: "Linux" }
]



const server = http.createServer((req, res)=> {

    const route = req.url;
    if(route === "/api/users") {
        res.end(JSON.stringify(userList));
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