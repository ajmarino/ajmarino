require('./bootstrap');
import { InertiaApp } from '@inertiajs/inertia-vue';
import Vue from 'vue';
import VueMeta from 'vue-meta';

Vue.use(InertiaApp)
Vue.use(VueMeta);

const app = document.getElementById('app')

new Vue({
    name: 'App',
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: "AJ Marino's Portfolio",
        // all titles will be injected into this template
        titleTemplate: "%s | AJ Marino's Portfolio"
    },

    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app)
