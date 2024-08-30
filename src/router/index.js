import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import MembersView from '@/views/MembersView.vue';
import Member10View from '@/views/members/Member10View.vue';
import Member11View from '@/views/members/Member11View.vue';
import Member12View from '@/views/members/Member12View.vue';
import opensourceView from '@/views/opensourceView.vue';
import OpenDataView from '@/views/OpenDataView.vue';
import ProjectView from '@/views/ProjectView.vue';
import LectureView from '@/views/LectureView.vue';
import Lecture2024Fst from '@/views/lectures/Lecture2024Fst.vue';
import Lecture2024Snd from '@/views/lectures/Lecture2024Snd.vue';
import Lecture2023Fst from '@/views/lectures/Lecture2023Fst.vue';
import Lecture2023Snd from '@/views/lectures/Lecture2023Snd.vue';
import Lecture2022Fst from '@/views/lectures/Lecture2022Fst.vue';
import Lecture2022Snd from '@/views/lectures/Lecture2022Snd.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/member',
      name: 'member',
      component: MembersView,
      children: [
        {
          path: '2022',
          name: 'member2022',
          component: Member10View
        },
        {
          path: '2023',
          name: 'member2023',
          component: Member11View
        },
        {
          path: '2024',
          name: 'member2024',
          component: Member12View
        },
      ]
    },
    {
      path: '/opensource',
      name: 'opensource',
      component: opensourceView
    },
    {
      path: '/opendata',
      name: 'opendata',
      component: OpenDataView
    },
    {
      path: '/proj',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/lecture',
      name: 'lecture',
      component: LectureView,
      children: [
        {
          path: '2024/2',
          name: 'lecture2024second',
          component: Lecture2024Snd
        },
        {
          path: '2024/1',
          name: 'lecture2024first',
          component: Lecture2024Fst
        },
        {
          path: '2023/2',
          name: 'lecture2023second',
          component: Lecture2023Snd
        },
        {
          path: '2023/1',
          name: 'lecture2023first',
          component: Lecture2023Fst
        },
        {
          path: '2022/2',
          name: 'lecture2022second',
          component: Lecture2022Snd
        },
        {
          path: '2022/1',
          name: 'lecture2022first',
          component: Lecture2022Fst
        },
      ]
    },
  ]
})

export default router
