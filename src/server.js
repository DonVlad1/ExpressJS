const express = require("express");
const app = express();
const port = process.env.PORT || 5000












// app.use(express.static("public"))
app.use(express.json())

const myFunc = (req, res, next) =>
{
    console.log("logged first")
    req.body.first = "first"
    next()
}

const myBetterFunction = (req, res, next) =>
{
    console.log("logged second")
    req.body.second = "second"
    next();
}

app.post("/", [myFunc, myBetterFunction], (req, res) =>
{
    console.log(req.body)
    res.send("Hi my name is Dan")
})

// app.get("/", (req, res) =>
// {
//     res.send("Hi my name is Vlad")
// })

// app.get("/hello", (req, res) =>
// {
//     // console.log(req.query.name)
//     // console.log(req.query.age)
//     if (req.query.age) 
//     {
//         res.send({
//             name: req.query.name,
//             age: req.query.age
//         })
//     }
//     else
//     {
//         res.send({ error: "No age found" })
//     }
// })

// app.get("/person/:id", (req, res) =>
// {
//     console.log(req.params)
//     // console.log(req.query.age)

//     res.send({
//         id: req.params.id
//     })

// })

// app.post("/", (req, res) =>
// {
//     console.log(req.body)
//     res.status(200)
// })

// app.post("/", (req, res) =>
// {
//     console.log(req.body);
//     res.status(201).send({ message: "success" });
// })

app.listen(port, () =>
{
    console.log(`listening on port ${port}`)
})