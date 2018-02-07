import axios from 'axios'
import { Toast } from 'antd-mobile'

axios.interceptors.request.use(function (config) {
    Toast.loading('加载中', 30, () => {
        console.log('Load complete !!!');
    });
    return config
})

axios.interceptors.response.use(function (config) {
    console.log('回来了')
    Toast.hide();
    return config
})