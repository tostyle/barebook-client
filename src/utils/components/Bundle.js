import React from 'react'
import isEqual from 'lodash/isEqual'

class Bundle extends React.Component {
  state = {
    // short for "module" but that's a keyword in js, so "mod"
    mod: null,
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (isEqual(nextProps.load, this.props.load)) {
      this.load(nextProps)
    }
  }

  async load(props) {
    this.setState({
      mod: null,
    })
    const mod = await props.load
    this.setState({
      // handle both es imports and cjs
      mod: mod.default ? mod.default : mod,
    })
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null
  }
}

export default Bundle
