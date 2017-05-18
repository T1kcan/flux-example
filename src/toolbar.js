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

const store = new GifStore()

class Toolbar extends Component {
  state = { searchText: '' }
  onSearchChange = (e) => {
    const { value } = e.target
    this.setState({ searchText: value })
  }

  onSearchSubmit = (e) => {
    e.stopPropagation()
    e.preventDefault()
    alert(`I should search for ${this.state.searchText}`)
  }

  render() {
    const { classes } = this.props
    const { searchText } = this.state

    return (
      <div className={classes.container}>
        <h3 className={classes.name}>My App</h3>
        <form onSubmit={this.onSearchSubmit}>
          <input
            className='input'
            placeholder='Search'
            value={searchText}
            onChange={this.onSearchChange}
          />
        </form>
      </div>
    )
  }
}

export default style(sheet)(Toolbar)
