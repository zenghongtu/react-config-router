import React from 'react'
import {connect} from 'react-redux'
import Page403 from './Page403'

const checkPermission = (authority, currentAuthority, target, noMatch = null) => {
  if (!authority) return target
  if (Array.isArray(authority)) {
    if (authority.includes(currentAuthority)) return target
  }
  if (typeof authority === 'string') {
    if (authority === currentAuthority) return target
    if (Array.isArray(currentAuthority)) {
      if (currentAuthority.includes(authority)) return target
    }
  }
  return noMatch
}

const Authorized = ({isAuthenticated, children, history, authority, currentAuthority}) => {
  if (isAuthenticated) {
    return checkPermission(authority, currentAuthority, children, <Page403/>)
  } else {
    history.replace('/user/login')
    return null
  }
}

export default connect(({isAuthenticated, currentAuthority}) => ({isAuthenticated, currentAuthority}))(Authorized)
