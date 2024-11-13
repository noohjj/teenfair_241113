const fetch = require("node-fetch");

const baseUrl = "http://apis.data.go.kr/1383000/gmis/teenRAreaServiceV2"
const options = {
    method:"GET",
    headers: {
        accept: "*/*"
    }
}