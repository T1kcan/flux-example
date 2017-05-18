import { Store } from './store'
import connect from './store/connect'

class GifStore extends Store {
  setSearchText(searchText) {
    this.setState({ searchText })
  }

  async loadGifs() {
    const { searchText } = this.state
    this.setState({ loading: true })
    const results = await fetch(`http://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchText)}&api_key=dc6zaTOxFJmzC`)
    const { data } = await results.json()
    this.setState({ gifs: data, loading: false })
  }

  selectGifById(gifId) {
    const { gifs } = this.state
    const targetGif = gifs.find(gif => gif.id === gifId)
    this.setState({
      gifs: gifs.map(gif => {
        if (gif.id == targetGif.id) {
          return { ...targetGif, selected: true }
        }
        return gif
      })
    })
  }

}

const store = new GifStore({ searchText: 'funny cats' })

export default store

