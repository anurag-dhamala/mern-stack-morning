import express from "express";          

const app = express();

const PORT = 8080;

app.use(express.json());

const userList = [
    {id: 1,  name: "Susish", class: "MERN Stack" },
    {id: 2,  name: "Prateek", class: "AI" },
    {id: 3,  name: "Dawa", class: "Linux" }
]


app.get("/api/users", (req, res)=> {
    // console.log("the request is", req);
    //
    res.json({
        users: userList
    });
});

app.get("/api/phone", (req, res)=> {
    res.json({
        name: "Samsung",
        batteryLife: 10,
        camera: "100MP"
    })
})


app.post("/api/user/add", (req, res)=> {

    const body = req.body;
    if(!body) {
        res.status(400).send({
            message: "Invalid Body."
        })
    }

    console.log("the body is ", body);
    if(!body.id || !body.name) {
        res.status(400).json({
            message: "Please provide a valid input"
        })
    }
    userList.push(body);
    // userList = [...userList, body];
    res.send({
        message: "Success"
    });
})


app.get("/api/user/:userId", (req, res)=> {
    const {userId} = req.params;
    
    const user = userList.find(user=> user.id === Number(userId));
    console.log("user:", user, userId);
    if(!user) {
        res.status(404).json({
            message: `User with ${userId} not found`
        })
    }

    res.send(user);
})




app.listen(PORT, ()=> {
    console.log(`Server started at port: ${PORT}`)
})

