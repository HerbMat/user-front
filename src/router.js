import Vue from 'vue';
import Router from 'vue-router';
import UserForm from './views/UserForm.vue';
import Users from './views/Users.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/users/add',
      name: 'UserForm',
      component: UserForm,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
  ],
});
