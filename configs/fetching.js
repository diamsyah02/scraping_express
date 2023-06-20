const axios = require('axios')
const { BASE_URL } = require('./constant')
const getData = async (param) => {
    try {
        let res = await axios.get(BASE_URL+param)
        return res.data
    } catch(e) {
        return res.response
    }
}

module.exports = { getData }