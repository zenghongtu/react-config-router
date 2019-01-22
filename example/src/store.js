import {createStore} from 'redux'
import {history} from 'react-config-router'
import {check} from './pages/Authorized'

const initState = {
  isAuthenticated: false,
  currentAuthority: 'guest',
  menuData: [],
  breadcrumbNameMap: {}
}

// Conversion router to menu.
function formatter(data, parentAuthority, parentName) {
  return data
    .map(item => {
      if (!item.name || !item.path) {
        return null
      }

      const result = {
        ...item,
        name: item.name,
        authority: item.authority || parentAuthority,
      }
      if (item.routes) {
        const children = formatter(item.routes, item.authority)
        // Reduce memory usage
        result.children = children
      }
      delete result.routes
      return result
    })
    .filter(item => item)
}

/**
 * get SubMenu or Item
 */
const getSubMenu = item => {
  // doc: add hideChildrenInMenu
  if (item.children && !item.hideChildrenInMenu && item.children.some(child => child.name)) {
    return {
      ...item,
      children: filterMenuData(item.children), // eslint-disable-line
    }
  }
  return item
}

/**
 * filter menuData
 */
const filterMenuData = menuData => {
  if (!menuData) {
    return []
  }
  return menuData
    .filter(item => item.name && !item.hideInMenu)
    .map(item => {
      // make dom
      const ItemDom = getSubMenu(item)
      const data = check(item.authority, ItemDom)
      return data
    })
    .filter(item => item)
}

const getBreadcrumbNameMap = menuData => {
  const routerMap = {}

  const flattenMenuData = data => {
    data.forEach(menuItem => {
      if (menuItem.children) {
        flattenMenuData(menuItem.children)
      }
      // Reduce memory usage
      routerMap[menuItem.path] = menuItem
    })
  }
  flattenMenuData(menuData)
  return routerMap
}

const reducer = (state = initState, {type, payload}) => {
  switch (type) {
    case 'login':
      // ...
      history.replace('/')
      return {
        isAuthenticated: true,
        currentAuthority: payload
      }
    case 'logout':
      return {
        isAuthenticated: false,
        currentAuthority: payload
      }
    case 'getMenuData':
      const {routes, authority} = payload
      const menuData = filterMenuData(formatter(routes, authority))
      const breadcrumbNameMap = getBreadcrumbNameMap(menuData)
      return {
        ...state,
        menuData,
        breadcrumbNameMap
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
