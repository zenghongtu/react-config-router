import React from 'react'

class UserLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>UserLayout page</div>
        <div>{this.props.children}</div>
      </React.Fragment>
    )
  }
}

export default UserLayout
