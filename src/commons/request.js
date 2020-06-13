import axios from 'axios'
import Message from "@/components/message";
import store from '@/store'

// create an axios instance
const service = axios.create({
    //baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: false, // send cookies when cross-domain requests
    timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        if (store.getters.token) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers['X-Token'] = "1b0679be72ad976ad5d491ad57a5eec0"
        }
        return config
    },
    error => {
        // do something with request error
        window.console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data

        // if the custom code is not 200, it is judged as an error.
        if (response.status !== 200) {
            Message.toast(res.message || 'Error');
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return Promise.resolve(res)
        }
    },
    error => {
        window.console.log('err' + error) // for debug
        Message.toast(error.message || 'Error');
        return Promise.reject(error)
    }
)

export default service;
