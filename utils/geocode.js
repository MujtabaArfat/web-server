const request = require('request');



const geocode=(address,callback)=>{
    const geoURL= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoibXVqdGFiYTAwNyIsImEiOiJjazh0Zm91eXowMm1tM2VveWVxY3I1NzBmIn0.bFt-baripU5PoTTQaHBgCg'
    request({url:geoURL,json:true},(error,res)=>{
    if(error){
        callback('Unable to connect to the location services',undefined)
    }
    else if(res.body.features.length===0){
        callback('Unable to find location.Try another search',undefined)
    }
    else{
        callback(undefined,{
            latitude:res.body.features[0].geometry.coordinates[1],
            longitude: res.body.features[0].geometry.coordinates[0],
            address:address

        })
    }


})

}


module.exports = geocode;
