// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Meta from 'vue-meta'
Vue.use(Meta)


import jquery from 'jquery'
// import tether from 'tether'
// import bootstrap from 'bootstrap'

import './scss/base.scss';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})