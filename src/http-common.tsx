
import axios from "axios";
export default axios.create({
    //baseURL:"http://localhost:3000",
    baseURL:"http://127.0.0.1",
    headers: {
        "Content-type": "application/json",
    }
});

