import Vue from 'vue';
import VueRouter from 'vue-router';

// import example from '../components/ExampleComponent.vue';
// import hello from '../components/Hello.vue';
// import hello2 from '../components/Hello2.vue';
// import view from '../components/View.vue';

const example = resolve => void(require(['../components/ExampleComponent.vue'], resolve));
const hello = resolve => void(require(['../components/Hello.vue'], resolve));
const hello2 = resolve => void(require(['../components/Hello2.vue'], resolve));
const view = resolve => void(require(['../components/View.vue'], resolve));

// const example = r => require.ensure([], () => r(require('../components/ExampleComponent.vue')), 'Example');
// const hello = r => require.ensure([], () => r(require('../components/Hello.vue')), 'Hello');
// const hello2 = r => require.ensure([], () => r(require('../components/Hello2.vue')), 'Hello2');
// const view = r => require.ensure([], () => r(require('../components/View.vue')), 'View');

Vue.use(VueRouter);

export default new VueRouter({
    saveScrollPosition: true,
    mode: 'history',
    routes: [
        {path: '/example', component: example, name: 'example',},
        {path: '/hello', component: hello, name: 'hello',},
        {path: '/hello2',component: hello2, name: 'hello2'},
        {path: '/view', component: view,  name: 'view', children: [
            {path: 'hello', component: hello, name: 'hello11'},
            {path: 'hello2',component: hello2, name: 'hello22'}]}
    ]
});
