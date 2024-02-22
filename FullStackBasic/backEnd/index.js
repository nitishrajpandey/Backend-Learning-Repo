import express from "express"

const app = express()

const port = process.env.PORT || 3000;


// app.get("/", (req, res) => {
//     res.send("server is ready")
// })

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            "id": "1",
            "title": "The Dizzy Chicken",
            "description": "Why did the chicken become a gymnast? Because it wanted to do the egg-flip."
        },
        {
            "id": "2",
            "title": "The Forgetful Ghost",
            "description": "Why did the ghost go to the party? He heard it was going to be a 'boo'tiful night!"
        },
        {
            "id": "3",
            "title": "The Musical Tomato",
            "description": "Why did the tomato turn red? Because it saw the salad dressing!"
        },
        {
            "id": "4",
            "title": "The Speedy Snail",
            "description": "Why did the snail paint an 'S' on his car? So people would say, 'Look at that S-car go!'"
        },
        {
            "id": "5",
            "title": "The Talkative Coffee",
            "description": "Why did the coffee file a police report? It got mugged."
        }
    ]

    res.send(jokes)

})


app.listen(port, () => {
    console.log(`Example server run on PORT ${port}`);
})