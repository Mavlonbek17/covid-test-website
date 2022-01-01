import axios from "axios";

const http = axios.create({
    baseURL: "http://test2.fnabiyev.uz/",
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});

export default http;