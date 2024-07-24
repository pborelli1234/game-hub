import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '641d2a8d68f64a11865115627af80539'
    }
})