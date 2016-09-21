import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './components/Clock'
import Library from './components/Library'

var App = React.createClass ({
  render () {
    return (
      <div>
        <Clock />
        This is the ReactDash App
        <Library />
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
