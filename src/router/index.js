import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Canvas from '@/components/Canvas';
import SignIn from '@/components/SignIn';
import UploadExcel from '@/components/UploadExcel';
import Lesson from '@/components/Lesson';
import AuthGuard from './auth-guard';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    beforeEnter: AuthGuard,
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/UploadExcel',
    name: 'UploadExcel',
    component: UploadExcel,
    beforeEnter: AuthGuard,
  },
  {
    path: '/Lesson/:CourseName/:LessonId',
    name: 'LessonCourse',
    component: Lesson,
    beforeEnter: AuthGuard,
  },
  {
    path: '/Lesson/:CourseName',
    name: 'LessonCourse',
    component: Lesson,
    beforeEnter: AuthGuard,
  },
  {
    path: '/Lesson',
    name: 'Lesson',
    component: Lesson,
    beforeEnter: AuthGuard,
  },
  {
    path: '/Canvas',
    name: 'Canvas',
    component: Canvas,
    beforeEnter: AuthGuard,
  },

  ],
});
