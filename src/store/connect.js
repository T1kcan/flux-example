import React from 'react'

const connect = store => ChildComponent => {

  const actions = { }

  Object
    .getOwnPropertyNames(store.constructor.prototype)
    .filter(x => x != 'constructor')
    .forEach(key => actions[key] = store[key].bind(store))

  class ConnectedComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = store.state
    }

    componentWillMount() {
      this.unsubscribe = store.subscribe((state) => this.setState(state))
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    render() {
      const childProps = {
        ...this.state,
        ...actions,
        ...this.props,
      }
      return React.createElement(ChildComponent, childProps, this.props.children)
    }
  }

  // TODO - hoist non-react statics

  return ConnectedComponent
}

export default connect
