import React from 'react'
import ReactDOM from 'react-dom'

import createRouter from 'react-config-router'
import routes from './router.config'

import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    {createRouter(routes)}
  </Provider>
  , document.getElementById('root'))
