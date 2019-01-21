import React from 'react'
import ReactDOM from 'react-dom'

import createRouter from 'react-simple-router'
import routes from './router.config'

ReactDOM.render(createRouter(routes), document.getElementById('root'))
