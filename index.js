//IMPORTING
const express = require("express")
const app = express()
const path = require("path")
//-EJS USES "VIEWS" AS A DEFAULT NAME FOR STATIC FOLDER, NOT "VIEW"! FOR HELL SAKE...
app.set("view engine", "ejs")


//IMPORTING DATABASE
const dataBase =
[
    [
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
    ads = {}
]


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
        posts: dataBase[0]
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
    res.send("Working")
})
app.use((req, res)=>{
    res.send("Page not found... =/")
})


//SERVER
const port = process.env.PORT || 8080
//-Express let us create the listen() callback without having to use res.end() as the response
app.listen(port, (req, res)=>{console.log(`Server on! Port: ${port}`)})