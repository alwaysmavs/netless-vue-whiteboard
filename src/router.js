import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage'
import RoomPage from './views/RoomPage'
import ReplayPage from './views/ReplayPage'
import RoomInput from './views/RoomInput'
import ReplayInput from './views/ReplayInput'
import Whiteboard from './views/Whiteboard'
import WhiteboardCreatorPage from './views/WhiteboardCreatorPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: HomePage
    },
    {
      path: '/whiteboard/:netlessRoomType/:uuid?/',
      name: 'WhiteboardCreatorPage',
      component: WhiteboardCreatorPage
    },
      {
          path: '/whiteboard/:netlessRoomType/:uuid/:userId/',
          name: 'Whiteboard',
          component: Whiteboard
      },
    {
      path: '/replay_input',
      name: 'ReplayInput',
      component: ReplayInput
    },
    {
      path: '/room_input',
      name: 'RoomInput',
      component: RoomInput
    },
    {
      path: '/room/:uuid/:room_token',
      name: 'RoomPage',
      component: RoomPage
    },
    {
      path: '/replay/:uuid/:room_token/:start_time?/:media?',
      name: 'ReplayPage',
      component: ReplayPage,
    },
  ]
})
