import React, { Component } from 'react'

import Header from './Header'
import ContentContainer from './ContentContainer'

class App extends Component {
  render() {
    
    return (
      <div>
        <Header 
          titel='Compare Area'
        />
        <ContentContainer />
      </div>
    )
  }
}

export default App;
