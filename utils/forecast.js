const request = require('request');

const geocode =require('./geocode');

 

const forecast=(latitude,longitude,address,callback)=>{

    const url='https://api.darksky.net/forecast/e285b3083b280a737fc3fd367dede4d9/'+latitude+','+longitude+'?units=si';
    request({url,json:true},(error,res)=>{
       
    if(error){
        callback('No net connection',undefined)
    }

    else{
        
        callback(undefined,{
            latitude:latitude,
            longitude:longitude,
            forecast:'Currently temprature here is '+res.body.currently.temperature+' and it is '+res.body.currently.summary,
            location:address
        })
    }
})
}



module.exports = forecast;
