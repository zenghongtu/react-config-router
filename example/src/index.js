import React from 'react'
import ReactDOM from 'react-dom'

import createRouter from 'react-config-router'
import routes from './router.config'

import {Provider} from 'react-redux'
import store from './store'

const historyOpts = {
  basename: '/react-config-router'
}

ReactDOM.render(
  <Provider store={store}>
    {createRouter(routes, {historyOpts})}
  </Provider>
  , document.getElementById('root'))
