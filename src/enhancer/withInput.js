import { compose, withState, withHandlers } from 'recompose'
import React, { Component } from 'react'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const handlers = inputName => ({
  [`onChange${inputName}`]: ({ changeInputValue }) => e => {
    e.persist()
    changeInputValue(() => e.target.value)
  },
})

// const hoc = (inputName) => (Rendered) =>
//   compose(
//     withState(inputName, 'changeInputValue', ''),
//     withHandlers(handlers(capitalizeFirstLetter(inputName)))
//   )(Rendered)

// export { handlers }

const hoc = input => Rendered => {
  const inputName = capitalizeFirstLetter(input)
  return class extends Component {
    constructor() {
      super()
      this.state = {
        [input]: '',
      }
      this[`onChange${inputName}`] = this[`onChange${inputName}`].bind(this)
    }
    [`onChange${inputName}`](e) {
      this.setState({
        [input]: e.target.value,
      })
    }
    render() {
      const ownProps = {
        [input]: this.state[input],
        [`onChange${inputName}`]: this[`onChange${inputName}`],
      }
      return <Rendered {...ownProps} {...this.props} />
    }
  }
}
export default hoc
