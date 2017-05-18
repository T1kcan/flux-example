class Store {
  subscribers = []

  constructor(initialState = {}) {
    this.state = initialState
  }

  subscribe(subscription) {
    this.subscribers = this.subscribers.concat([subscription])
    return () => this.subscribers = this.subscribers.filter(sub => sub !== subscription)
  }

  setState(newState) {
    this.state = Object.assign({}, this.state, newState)
    this.subscribers.forEach(sub => sub(this.state))
  }
}

export {
  Store
}
