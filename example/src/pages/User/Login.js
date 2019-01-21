import React from 'react'
import {connect} from 'react-redux'

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>Login page</div>
        <button onClick={() => {
          this.props.dispatch({type: 'login'})
        }}>login
        </button>
      </React.Fragment>
    )
  }
}

export default connect()(Login)
