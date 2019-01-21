import React from 'react'
import {connect} from 'react-redux'

class BasicLayout extends React.Component {
  render() {
    const {children} = this.props
    return (
      <React.Fragment>
        <div>BasicLayout page
          <div>{children}</div>
        </div>
        <button onClick={() => {
          this.props.dispatch({type: 'logout'})
        }}>logout
        </button>
      </React.Fragment>
    )
  }
}

export default connect()(BasicLayout)
