import React from 'react'
import Router from './router'
import renderRoutes from './renderRoutes'
import createHistory from './createHistory'

let history = null

const createRouter = (routerConfig, {extraProps = {}, switchProps = {}, historyOpts = {}} = {}) => {
  history = createHistory(historyOpts)
  return (
    <Router history={history}>
      {renderRoutes(routerConfig, extraProps, switchProps)}
    </Router>
  )
}

export {history}
export default createRouter
