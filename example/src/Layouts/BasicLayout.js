import React from 'react'

class BasicLayout extends React.Component {
  render() {
    const {children} = this.props
    return (
      <React.Fragment>
        <div>BasicLayout page
          <div>{children}</div>
        </div>
      </React.Fragment>
    )
  }
}

export default BasicLayout
