import axios from "axios";

const http = axios.create({
    baseURL: "http://coronavirus-test.world-medical.uz/"
});

export default http;