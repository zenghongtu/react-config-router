import React from 'react'
import Router from './router'
import renderRoutes from './renderRoutes'
import createHistory from './createHistory'

const createRouter = (routerConfig, {extraProps = {}, switchProps = {}, historyOpts = {}} = {}) => (
  <Router history={createHistory(historyOpts)}>
    {renderRoutes(routerConfig, extraProps, switchProps)}
  </Router>
)

export default createRouter
