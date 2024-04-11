const { default: axios } = require("axios");

const getGooglePlace=(category,radius,lat,lng)=>axios.get('/api/google-place?'+
'category='+category+'&lat='+lat+'&lng='+lng)

export default{
    getGooglePlace
}