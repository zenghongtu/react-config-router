import React from 'react'
import Route from './route'
import Switch from './switch'
import Redirect from './redirect'

const RouteInstanceMap = {
  get(key) {
    return key._routeInternalComponent
  },
  has(key) {
    return key._routeInternalComponent !== undefined
  },
  set(key, value) {
    key._routeInternalComponent = value
  }
}

// Support pass props from layout to child routes
const RouteWithProps = ({path, exact, strict, render, location, ...rest} = {}) => (
  <Route
    path={path}
    exact={exact}
    strict={strict}
    location={location}
    render={props => render({...props, ...rest})}
  />
)

function withRoutes(route) {
  if (RouteInstanceMap.has(route)) {
    return RouteInstanceMap.get(route)
  }

  const {Routes} = route
  let len = Routes.length - 1
  let Component = args => {
    const {render, ...props} = args
    return render(props)
  }
  while (len >= 0) {
    const AuthRoute = Routes[len]
    const OldComponent = Component
    Component = props => (
      <AuthRoute {...props}>
        <OldComponent {...props} />
      </AuthRoute>
    )
    len -= 1
  }

  const ret = args => {
    const {render, ...rest} = args
    return (
      <RouteWithProps
        {...rest}
        render={props => {
          return <Component {...props} route={route} render={render}/>
        }}
      />
    )
  }
  RouteInstanceMap.set(route, ret)
  return ret
}

export default function renderRoutes(
  routes,
  extraProps = {},
  switchProps = {}
) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => {
        if (route.redirect) {
          return (
            <Redirect
              key={route.key || i}
              from={route.path}
              to={route.redirect}
              exact={route.exact}
              strict={route.strict}
            />
          )
        }
        const RouteRoute = route.Routes ? withRoutes(route) : RouteWithProps
        return (
          <RouteRoute
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props => {
              const childRoutes = renderRoutes(
                route.routes,
                {},
                {
                  location: props.location
                }
              )
              if (route.component) {
                const newProps = {
                  ...props,
                  ...extraProps
                }
                return (
                  <route.component {...newProps} route={route}>
                    {childRoutes}
                  </route.component>
                )
              } else {
                return childRoutes
              }
            }}
          />
        )
      })}
    </Switch>
  ) : null
}
