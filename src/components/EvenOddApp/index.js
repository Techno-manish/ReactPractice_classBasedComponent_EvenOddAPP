// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    console.log(count)
    const checkNum = () => (count % 2 === 0 ? 'Even' : 'Odd')
    return (
      <div className="bgContainer">
        <div className="innerContainer">
          <h1 className="mainHeading">Count {count}</h1>
          <p className="para">Count is {checkNum()}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="info">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
