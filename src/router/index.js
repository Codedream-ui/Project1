import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'

import AboutIswee from '@/pages/aboutIswee/aboutIswee'
import AboutIsweeKeynoteSpeakers from '@/pages/aboutIswee/aboutIsweeKeynoteSpeakers'
import AboutIsweeCommittes from '@/pages/aboutIswee/aboutIsweeCommittes'
import AboutIsweeConferenceVenue from '@/pages/aboutIswee/aboutIsweeConferenceVenue'

import Submissions from '@/pages/submissions/submissions'
import SubmissionsTopics from '@/pages/submissions/submissionsTopics'
import SubmissionsPublications from '@/pages/submissions/submissionsPublications'
import SubmissionsGuidelines from '@/pages/submissions/submissionsGuidelines'

import Agenda from '@/pages/agenda'
import Registration from '@/pages/registration'
import HotelAndTravel from '@/pages/hotelAndTravel'
import ContacUs from '@/pages/contacUs'

Vue.use(Router)

export default new Router({
  // 指定自定义class
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/aboutIswee',
      name: 'AboutIswee',
      component: AboutIswee
    },
    {
      path: '/submissions',
      name: 'Submissions',
      component: Submissions
    },
    {
      path: '/agenda',
      name: 'Agenda',
      component: Agenda
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/hotelAndTravel',
      name: 'HotelAndTravel',
      component: HotelAndTravel
    },
    {
      path: '/contacUs',
      name: 'ContacUs',
      component: ContacUs
    },


    {
      path: '/aboutIsweeKeynoteSpeakers',
      name: 'AboutIcsweeKeynoteSpeakers',
      component: AboutIsweeKeynoteSpeakers
    },
    {
      path: '/aboutIsweeCommittes',
      name: 'AboutIsweeCommittes',
      component: AboutIsweeCommittes
    },
    {
      path: '/aboutIsweeConferenceVenue',
      name: 'AboutIsweeConferenceVenue',
      component: AboutIsweeConferenceVenue
    },

    {
      path: '/submissionsTopics',
      name: 'SubmissionsTopics',
      component: SubmissionsTopics
    },
    {
      path: '/submissionsPublications',
      name: 'SubmissionsPublications',
      component: SubmissionsPublications
    },
    {
      path: '/submissionsGuidelines',
      name: 'SubmissionsGuidelines',
      component: SubmissionsGuidelines
    },
  ]
})
