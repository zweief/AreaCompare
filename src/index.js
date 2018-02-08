import React from 'react'
import ReactDOM from 'react-dom'
import App from './container/App'
import registerServiceWorker from './registerServiceWorker'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './index.css'
import './styles/materialize-grid.css'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const AppEntry = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<AppEntry />, document.getElementById('root'))
registerServiceWorker()
