//IMPORTING
const express = require("express")
const path = require("path")
const fs = require("fs")
//-EJS USES "VIEWS" AS A DEFAULT NAME FOR STATIC FOLDER, NOT "VIEW"! FOR HELL SAKE...
const app = express()
app.set("view engine", "ejs")


//IMPORTING DATABASE
const dataBase =
{
    posts: [
        {
            title: "Post 1",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quia nostrum possimus aliquam earum id facere voluptates eaque, consectetur quae cupiditate perspiciatis porro est non maiores! Nemo ducimus quas culpa?",
            stars: 2
        },
        {
            title: "Post 2",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quia nostrum possimus aliquam earum id facere voluptates eaque, consectetur quae cupiditate perspiciatis porro est non maiores! Nemo ducimus quas culpa?"
        },
        {
            title: "Post 3",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quia nostrum possimus aliquam earum id facere voluptates eaque, consectetur quae cupiditate perspiciatis porro est non maiores! Nemo ducimus quas culpa?",
            stars: 5
        }
    ],
    ads: {}
}


//DEFINING STATIC FOLDER IF WITHOUT VIEW ENGINE
//app.use(express.static(path.join(__dirname, "views")))
//DEFINING PUBLIC FOLDER
app.use(express.static(path.join(__dirname, "public")))
//ENABLING SERVER TO RECEIVE DATA VIA POST METHOD
app.use(express.urlencoded({extended: true}))


//ROUTES
app.get("/", (req, res)=>{
    //-EJS is seeing the folders so we don't have to point them out, just the folders/files within it
    res.render("home", {
        title: "Basic Project: Home"
    })
})
app.get("/posts", (req, res)=>{
    res.render("posts", 
    {
        title: "Basic Project: Posts",
        posts: dataBase.posts
    }
    )
})
app.get("/create-post", (req, res)=>{
    res.render("create-post", 
        {
            title: "Basic Project: Posts Creation"
        }
    )
})
app.post("/save-post", (req, res)=>{
    const {title, text} = req.body
    const posts = JSON.parse(fs.readFileSync("./store/posts.json"))
    posts.push({title, text})
    fs.writeFileSync("./store/posts.json", JSON.stringify(posts))

    res.send("Working")
})
app.use((req, res)=>{
    res.send("Page not found... =/")
})


//SERVER
const port = process.env.PORT || 8080
//-Express lets us create the listen() callback without having to use res.end() as the response
app.listen(port, (req, res)=>{console.log(`Server on! Port: ${port}`)})