import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

// Menu implementation when more Features
// import Drawer from 'material-ui/Drawer'
// import MenuItem from 'material-ui/MenuItem'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state={
      // open: false
    }
    // this.handleOpen = this.handleOpen.bind(this)
  }

  // handleOpen = () => this.setState({open: !this.state.open})

  render() {
    const {titel} = this.props
    // const {open} = this.state
    return (
      <div>
        <AppBar
          title={titel}
          showMenuIconButton={false}
          style={{marginBottom: '15px'}}
        />
        {/* <Drawer open={open} docked={false} onRequestChange={this.handleOpen}>
          <MenuItem>Test</MenuItem>
        </Drawer> */}
      </div>
    )
  }

}

export default Header
