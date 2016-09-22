import React from 'react'

const Clock = React.createClass ({

  setTime: function() {
    var currentDate = new Date()
    var hours = '' + currentDate.getHours()
    var mins = '' + currentDate.getUTCMinutes()
    var secs = '' + currentDate.getUTCSeconds()

    if( hours.split('').length < 2 ){
      hours = '0' + hours
    }
    if( mins.split('').length < 2 ){
      mins = '0' + mins
    }
    if( secs.split('').length < 2 ){
      secs = '0' + secs
    }

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
        {this.state.hours}:{this.state.mins}:{this.state.secs}
      </div>
    )
  }
})

export default Clock
