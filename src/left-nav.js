import React, { Component } from 'react'

const searchStrings = [
  'funny cat',
  'funny dog',
  'ship it',
  'dance',
]

export default class LeftNav extends Component {
  render() {
    const buttons = searchStrings.map(str => (
      <a key={str} className='panel-block' onClick={() => alert('help!')}>
      {str}
      </a>
    ))

    return (
      <div className='panel'>
        <h3 className='panel-heading'>Saved Searches</h3>
        {buttons}
      </div>
    )
  }
}
