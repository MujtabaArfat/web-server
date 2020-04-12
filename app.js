const express= require('express')
const path=require('path')
const app=express()
const hbs= require('hbs')
const geocode =require('./utils/geocode')
const forecast= require('./utils/forecast')

app.use(express.static(path.join(__dirname,'./public')))
const partialPath=path.join(__dirname,'./templates/partials')
const viewPath = path.join(__dirname,'./templates/views')

app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialPath)
app.get('',(req,res)=>{
    res.render('index',{
        title:'MadMax',
        name:'Renderboy'
    })
})

app.get('/About',(req,res)=>{
    res.render('About')
})

app.get('/help',(req,res)=>{
    res.send([{
        name:'Arfat',
        age:22
    },
    {
        name:'Asif',
        age:21
    }
])
})

app.get('/about',(req,res)=>{
    res.send('About page')
})
app.get('/Weather',(req,res)=>{
    res.render('Weather')
})
app.get('/Weather/Track',(req,res)=>{
    console.log("HEre")
    if(req.query.address)
    {
        geocode(req.query.address,(error,data)=>{
        if(error){
            console.log("In error")
            console.log(error)
        }
        else{
            console.log(data)
            forecast(data.latitude,data.longitude,'New York',(error,resp)=>{
                if(error){
                    console.log(error)
                }

                else{      console.log(resp)
                          res.send({
                             resp
                          })
                }
              
            
        })
        }
    })
    }
    else{
        res.send({
            error:'You must provide address'
        })
    
    }
 
})


app.get('/help/*',(req,res)=>{
res.send('help article not found')
})
app.get('*',(req,res)=>{
    res.send('My 404 page')

})

app.listen(8000,()=>{
    console.log("server at port:8000")
})