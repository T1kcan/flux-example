import React, { Component, PropTypes } from 'react'
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

import store from './gif-store'
import connect from './store/connect'

class Toolbar extends Component {
  static propTypes = {
    searchText: PropTypes.string,
    setSearchText: PropTypes.func,
    loadGifs: PropTypes.func,
  }

  onSearchChange = (e) => {
    const { value } = e.target
    this.props.setSearchText(value)
  }

  onSearchSubmit = (e) => {
    e.stopPropagation()
    e.preventDefault()

    this.props.loadGifs()
  }

  render() {
    const { classes, searchText } = this.props

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

const storeConnector = connect(store)
export default storeConnector(style(sheet)(Toolbar))
