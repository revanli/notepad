import React from 'react';
import { renderRoutes } from 'react-router-config'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import routes from './routes'
import { IconStyle } from 'src/assets/iconfont'
import { ResetStyle, GlobalStyle } from './App.style'

const Router: any = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter

const App: React.FC = () => {
  return (
    <Router>
      <ResetStyle/>
      <GlobalStyle/>
      <IconStyle/>
      {renderRoutes(routes)}
    </Router>
  )
}

export default App
