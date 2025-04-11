// script.js
const express=require ('express')
//const { log } =require('console')
//const path= require('path')
const app= express()
const User= require("./database")
//const user=require("database.js")
//connectDB()
//User()
app.set("view engine","ejs")
app.use(express.json())
app.use(express.static("public"))
// ✅ Add this line for form data parsing:
app.use(express.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
    const list = await User.find();
    res.render("index", { list });
});

app.post("/viewsdata", async (req,res)=>{
    const {text}= req.body;
    await User.create({username:text});
    const list=await User.find();
    res.render("index", {list})
})

app.get("/update/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render("update", { user });
});

app.post("/update/:id", async (req, res) => {
    const { username } = req.body;
    await User.findByIdAndUpdate(req.params.id, { username });
    res.redirect("/");
});

app.get("/delete/:id", async(req,res)=>{
   
    await User.findByIdAndDelete(req.params.id)
   res.redirect("/")

})

const port=5000
app.listen(port,err=>{
    console.log("server is running on 5000");
})
