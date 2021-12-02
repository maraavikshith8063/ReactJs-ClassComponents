import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  onDecrease = () => {
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
  }
  onReset = () => {
    this.setState(prevState => {
      return {count: 0}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="header">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <button className="button" type="button" onClick={this.onReset}>
            Reset
          </button>
          <button className="button" type="button" onClick={this.onDecrease}>
            Decrement
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
