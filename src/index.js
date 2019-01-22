import React from 'react'
import Router from './router'
import renderRoutes from './renderRoutes'
import createHistory from './createHistory'

let history = null

const createRouter = (routerConfig, {mode = 'history', routerProps = {}, extraProps = {}, switchProps = {}, historyOpts = {}} = {}) => {
  history = createHistory(mode, historyOpts)
  return (
    <Router history={history} {...routerProps}>
      {renderRoutes(routerConfig, extraProps, switchProps)}
    </Router>
  )
}

export {history}
export default createRouter
