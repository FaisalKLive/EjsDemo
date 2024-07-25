console.log("==============*******************===================")

const express = require('express')

const app = express()

const port = 9090

// set the view engine as ejs for using ejs files

app.set('view-engine','ejs')

// set the public folder for using static resources

app.use(express.static('public'))

app.listen(port,()=>{

    console.log(`App is Listening at port ${port}`)
})


// create a route for rendering home.ejs file

app.get('/home',(req,res)=>{

    const  data=[{id:111,name:"Harrison",contact:"416-111-2222",city:"Toronto"},

    {id:222,name:"Jeferson",contact:"416-333-2222",city:"Kitchener"},

    {id:333,name:"Robinson",contact:"416-444-2222",city:"Detroit"}


    ]
    res.render('home.ejs',{name:"Conestoga Students",data:data})
})


// create a route for rendering about.ejs file

app.get('/about',(req,res)=>{

    res.render('about.ejs')
})

// create a route for rendering support.ejs file

app.get('/support',(req,res)=>{

    res.render('support.ejs')
})

// create a route for rendering contact.ejs file

app.get('/contact',(req,res)=>{

    res.render('contact.ejs')
})