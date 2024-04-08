import { readFileSync } from "fs";
import express from "express"
import { type } from "os";

const index = readFileSync("index.html", "utf-8")
const data = JSON.parse(readFileSync("product.json", "utf-8"))
const product = data.products



//create server
const port = 8080
const app = express()

// isko logger ve bol sakte hai (jisme sab detail store ho aur styore kar sakte hai isko)

app.use((req, res, next) => {
    console.log(req.ip, req.method);
    next()
})

const authcheck = (req, res, next) => {
    console.log(req.query);
    if (req.query.password == "1234") {
        next()
    } else {
        res.sendStatus(401)
    }
}





app.get("/", authcheck, (req, res) => {
    // res.send("hello")
    // res.status(404)
    res.json(data)
})
app.post("/", (req, res) => {
    res.json({
        type: "post"
    })
})
app.put("/", (req, res) => {
    res.json({
        type: "put"
    })
})
app.delete("/", (req, res) => {
    res.json({
        type: "delete"
    })
})
app.patch("/", (req, res) => {
    res.json({
        type: "patch"
    })
})







app.listen(port, () => {
    console.log(`server listen on port : ${port}`);
})


