import React, { Component } from 'react'
import { style } from './style'

const sheet = {
  container: {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  name: {
    flex: '1',
  }
}

import { Store } from './store'
import connect from './store/connect'

class GifStore extends Store {
  setSearchText(searchText) {
    this.setState({ searchText })
  }
}

class Toolbar extends Component {
  render() {
    const {classes } = this.props
    return (
      <div className={classes.container}>
        <h3 className={classes.name}>My App</h3>
        <form>
          <input 
            className='input' 
            placeholder='Search' 
          />
        </form>
      </div>
    )
  }
}

export default style(sheet)(Toolbar)
