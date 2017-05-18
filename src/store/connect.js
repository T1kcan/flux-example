import React from 'react'

const connect = store => ChildComponent => {
  const actions = { }
  Object
    .getOwnPropertyNames(store.constructor.prototype)
    .filter(x => x != 'constructor')
    .forEach(key => actions[key] = store[key].bind(store))

  class ConnectedComponent extends React.Component {
    componentWillMount() {
      this.unsubscribe = store.subscribe((state) => this.setState(state))
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    render() {
      return React.createElement(ChildComponent, { ...this.state, ...actions, ...this.props }, this.props.children)
    }
  }
}

export default connect
