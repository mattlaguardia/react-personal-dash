import React from 'react'

const Clock = React.createClass ({

  setTime: function() {
    var currentDate = new Date()
    var hours = currentDate.getUTCHours() + 5
    var mins = currentDate.getUTCMinutes()
    var secs = currentDate.getUTCSeconds()

    this.setState({
      hours: hours,
      mins: mins,
      secs: secs
    })
  },

  componentWillMount: function() {
    this.setTime()
  },

  componentDidMount: function() {
    window.setInterval(function () {
      this.setTime()
    }.bind(this),1000)
  },

  render () {
    return (
      <div className='clock-div'>
        <h1>{this.state.hours}:{this.state.mins}:{this.state.secs}</h1>
      </div>
    )
  }
})

export default Clock
