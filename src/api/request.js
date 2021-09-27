import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://autumnfish.cn',
    timeout: 5000
})


instance.interceptors.request.use(config => {
    return config;
}, err => {
    return Promise.reject(err)
})

instance.interceptors.response.use(result => {
    return result.data.result ? result.data.result : result.data;
}, err => {
    return Promise.reject(err)
})


export default instance