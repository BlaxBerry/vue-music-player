import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://autumnfish.cn',
    timeout: 5000
})
export default instance