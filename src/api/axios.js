import axios from "axios";

const BASE_URL = "http://localhost:8080/bbd-coffee"

export default axios.create({
    baseURL: BASE_URL
});