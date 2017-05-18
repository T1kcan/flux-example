import React, { Component } from 'react'

const GifGrid = ({ gifs }) => {
  const children = gifs.map((gif) => {
    return (<img key={gif.id} alt='' src={gif.images.fixed_width.url} />)
  })
  return <div>{children}</div>
}

export default class MainContent extends Component {
  state = { gifs: undefined }

  async componentDidMount() {
    const results = await fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
    const { data } = await results.json()
    this.setState({ gifs: data })
  }

  render() {
    const { gifs } = this.state
    if (!gifs) {
      return <div>Click a gif topic</div>
    }
    return <GifGrid gifs={gifs} />
  }
}
