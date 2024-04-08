
import http from "http"
import { readFileSync } from "fs";

const index = readFileSync("index.html", "utf-8")
const data = JSON.parse(readFileSync("product.json", "utf-8"))

const product = data.products


//create server
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader("dummy", "dummyvalue")

    if (req.url.startsWith("/product")) {
        const id = req.url.split("/")[2]
        const prd = product.find(p => p.id === (+id))


        res.setHeader("content-type", "text/html")
        const modifiyIndex = index
            .replace('**url**', prd.thumbnail)
            .replace('**title**', prd.title)
            .replace('**price**', prd.price)
            .replace('**rating**', prd.rating)
        res.end(modifiyIndex)
        return

    }



    switch (req.url) {
        case "/":

            res.setHeader("content-type", "text/html")
            res.end(index)
            break;
        case "/api":
            res.setHeader("content-type", "application/json")
            res.end(JSON.stringify(data))
            break


        default:
            res.writeHead(404)
            res.end()

    }

})

server.listen(8080, () => {
    console.log(`server is runnig on port 8080`);
})