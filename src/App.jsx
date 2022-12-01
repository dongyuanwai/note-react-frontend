import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import routes from '../src/router'

import {ConfigProvider} from "zarm"
import zhCN from 'zarm/lib/config-provider/locale/zh_CN'

function App() {
  return <Router>
    <ConfigProvider primaryColor={'#007fff'} locale={zhCN}>
      <Routes>
        {routes.map(route => <Route exact key={route.path} path={route.path} element={<route.component />} />)}
      </Routes>
    </ConfigProvider>
   </Router>
}

export default App