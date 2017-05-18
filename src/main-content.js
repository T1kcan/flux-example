import React, { Component } from 'react'

const GifGrid = ({ gifs }) => {
}

import store from './gif-store'
import connect from './store/connect'

class GifBox extends Component {
  render() {
    const { gif, selectGifById } = this.props
    const src = gif.selected ? null : gif.images.fixed_width.url
    return (
      <img onClick={() => selectGifById(gif.id)} key={gif.id} alt='' src={src} />
    )
  }
}

class MainContent extends Component {
  componentWillMount() {
    this.props.loadGifs()
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.gifs == this.props.gifs) {
      return false
    }
  return true
  }

  render() {
    const { gifs, searchText, selectGifById } = this.props
    if (!gifs) {
      return <div>Click a gif topic</div>
    }
    const gifImgs = gifs.map((gif) => {
      return <GifBox gif={gif} selectGifById={selectGifById} />
    })
    return (
      <div className='panel'>
        <h3>You searched for: {searchText}</h3>
        <div>
          {gifImgs}
        </div>
      </div>
    )
  }
}

export default connect(store)(MainContent)
