//IMPORTING
const express = require("express")
const app = express()
const path = require("path")
//-EJS USES "VIEWS" AS A DEFAULT NAME FOR STATIC FOLDER, NOT "VIEW"! FOR HELL SAKE...
app.set("view engine", "ejs")

//DEFINING STATIC FOLDER IF WITHOUT VIEW ENGINE
//app.use(express.static(path.join(__dirname, "views")))
//DEFINING PUBLIC FOLDER
app.use(express.static(path.join(__dirname, "public")))


//ROUTES
app.get("/", (req, res)=>{
    //-EJS is seeing the folders so we don't have to point them out, just the folders/files within it
    res.render("index", {
        title: "Basic Project: Home"
    })
})
app.get("/posts", (req, res)=>{
    res.render("posts", {
        title: "Basic Project: Posts", 
        posts: [
            {
                title: "Post 1",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quia nostrum possimus aliquam earum id facere voluptates eaque, consectetur quae cupiditate perspiciatis porro est non maiores! Nemo ducimus quas culpa?"
            },
            {
                title: "Post 2",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quia nostrum possimus aliquam earum id facere voluptates eaque, consectetur quae cupiditate perspiciatis porro est non maiores! Nemo ducimus quas culpa?"
            },
            {
                title: "Post 3",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quia nostrum possimus aliquam earum id facere voluptates eaque, consectetur quae cupiditate perspiciatis porro est non maiores! Nemo ducimus quas culpa?"
            }
        ]
    })
})
app.use((req, res)=>{
    res.send("Page not found... =/")
})


//SERVER
const port = process.env.PORT || 8080
//-Express let us create the listen() callback without having to use res.end() as the response
app.listen(port, (req, res)=>{console.log(`Server on! Port: ${port}`)})