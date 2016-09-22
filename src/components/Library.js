import React from 'react'

const Library = React.createClass({

  getInitialState: function() {
    return { searchString: '' }
  },

  handleChange: function(e) {
    this.setState({searchString: e.target.value})
  },

  render () {

    var libraries = [
      { name: 'React', url: 'http://facebook.github.io/react/'},
      { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
      { name: 'AngularJS', url: 'https://angularjs.org/'},
      { name: 'Ember', url: 'http://emberjs.com/'},
      { name: 'Express', url: 'http://expressjs.com/'},
      { name: 'Lodash', url: 'http://lodash.com/'},
      { name: 'Moment', url: 'http://momentjs.com/'},
      { name: 'Koa', url: 'http://koajs.com/'}
    ]

    var searchString = this.state.searchString.trim().toLowerCase()

    if(searchString.length > 0){
      libraries = libraries.filter(function(l){
        return l.name.toLowerCase().match( searchString )
      })
    }

    return (
      <div>
        <input type='text' value={this.state.searchString} onChange={this.handleChange} placeholder='Search'/>
        <ul>
          { libraries.map( function(l){
            return <li key={l.id}>{l.name} <a target='_blank' href={l.url}>{l.url}</a></li>
          })}
        </ul>
      </div>
    )
  }
})

export default Library
