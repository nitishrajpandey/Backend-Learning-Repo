import { readFileSync } from "fs";
import express from "express"


const index = readFileSync("index.html", "utf-8")
const data = JSON.parse(readFileSync("product.json", "utf-8"))
const products = data.products


//create server
const port = 8080
const app = express()

app.use(express.json())  // for parsing application/json


// C R U D

//CREATE POST /PRODUCT

app.post("/product", (req, res) => {
    console.log(req.body);
    products.push(req.body)
    res.json(req.body)
})



//READ GET /PRODUCTS
app.get("/products", (req, res) => {
    res.json(products)
})
//READ GET /PRODUCTS/:ID
app.get("/products/:id", (req, res) => {
    const id = Number(req.params.id)
    const product = products.find((item) => item.id === id)
    res.json(product)
})


// UPDATE PUT /PRODUCTS/:ID   

app.put("/products/:id", (req, res) => {
    const id = Number(req.params.id)
    const productIndex = products.findIndex((item) => item.id === id)
    products.splice(productIndex, 1, { ...req.body, id: id })
    res.status(201).json()
})


//PATCH (kewal jo change karna chate hai woo change hoga isse )

app.patch("/products/:id", (req, res) => {
    const id = Number(req.params.id)
    const productIndex = products.findIndex((item) => item.id === id)
    const product = products[productIndex]
    products.splice(productIndex, 1, { ...product, ...req.body })
    res.status(201).json()
})


// DELETE  /PRODUCT/:ID
app.delete("/products/:id", (req, res) => {
    const id = Number(req.params.id)
    const productIndex = products.findIndex((item) => item.id === id)
    products.splice(productIndex, 1)
    res.status(201).json()
})







// API -> ENDPOINT


app.get("/", (req, res) => {
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


