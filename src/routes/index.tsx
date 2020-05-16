import { RouteConfig } from 'react-router-config'

import Index from 'src/pages/Index'
import Editor from 'src/pages/Editor'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Index,
    exact: true
  },
  {
    path: '/editor',
    component: Editor,
    exact: true
  },
  {
    path: '/editor/:noteId',
    component: Editor,
    exact: true
  }
]

export default routes