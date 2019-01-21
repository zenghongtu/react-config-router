import React from 'react'
import {connect} from 'react-redux'
import {history} from 'react-config-router'

class BasicLayout extends React.Component {
  componentDidMount() {
    const {
      dispatch,
      route: {routes, authority}
    } = this.props
    dispatch({
      type: 'getMenuData',
      payload: {
        routes, authority
      }
    })
  }

  render() {
    const {
      children,
      menuData,
      breadcrumbNameMap,
      location,
      dispatch
    } = this.props
    if (!menuData) return null

    const go = (path) => () => {
      history.push(path)
    }
    const renderMenu = (data) => {
      return data.map((item, idx) => (
        item.children ? renderMenu(item.children) : (
          <p style={{cursor: 'pointer', color: 'blue'}} key={idx} onClick={go(item.path)}>{item.path}</p>)
      ))
    }
    const currentPage = breadcrumbNameMap[location.pathname] || {}
    return (
      <React.Fragment>
        <div>BasicLayout page</div>
        <button onClick={() => {
          dispatch({type: 'logout'})
        }}>logout
        </button>
        <p>当前页面: {currentPage.name}</p>
        <div>
          {menuData && renderMenu(menuData)}
        </div>
        <div>{children}</div>

      </React.Fragment>
    )
  }
}

export default connect(({
                          menuData,
                          breadcrumbNameMap
                        }) => ({
  menuData,
  breadcrumbNameMap
}))(BasicLayout)
