import Vue from 'vue'
import Vuex from 'vuex'

const files = require.context('.', true, /\.js$/)//读取所有的vuex模块

const modules = files.keys().filter(file => file != './index.js').reduce((modules, file) => {

    const name = file.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = files(file)

    modules[name] = value.__esModule && value.default ? value.default : value
    return modules
}, {})
//动态注册所有公共状态 如用户状态。各个模块状态通过 registerModule 来管理
//https://vuex.vuejs.org/zh/guide/modules.html

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: modules,
    strict: process.env.NODE_ENV !== 'production'
})

export default store