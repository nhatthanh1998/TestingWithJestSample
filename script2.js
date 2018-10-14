const axios = require('axios')

const getData = async () =>{
    const response = await axios.get("https://swapi.co/api/people")
    return {count:response.data.count,results:response.data.results}
}

module.exports = {
    getData
}