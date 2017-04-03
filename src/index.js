import angular from 'angular';
// import services here
// import {TodoService} from './app/todos/todos';
// import different possible states here
import {Dashboard} from './app/states/dashboard/dashboard';
import {Login} from './app/states/login/login';
import {Signup} from './app/states/signup/signup';
import {Search} from './app/states/search/search';
import {Profile} from './app/states/profile/profile';

// node_modules
import 'angular-ui-router';
import 'angular-jwt';

import routesConfig from './routes';

//styles
import './index.css';

angular
  .module('app', ['ui.router', 'angular-jwt'])
  .config(routesConfig)
  .component('dashboard', Dashboard)
  .component('login', Login)
  .component('signup', Signup)
  .component('search', Search)
  .component('profile', Profile);