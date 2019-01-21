import React from 'react'

class User extends React.Component {
  render() {
    return (
      <div>name: {this.props.match.params.name}</div>
    )
  }
}

export default User
