require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue'
import Vuetify from "vuetify";
import {createInertiaApp, plugin} from '@inertiajs/inertia-vue'

Vue.mixin({methods: {route}});
Vue.use(plugin)
Vue.use(Vuetify)

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({el, App, props}) {
        new Vue({
            vuetify: new Vuetify({
                theme: {dark: true}
            }),
            render: h => h(App, props),
        }).$mount(el)
    },
})
