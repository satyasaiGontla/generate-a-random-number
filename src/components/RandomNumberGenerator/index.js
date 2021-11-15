// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {random: 0}

  generatingRandomNumber = () => {
    const generateRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({random: generateRandomNumber})
  }

  render() {
    const {random} = this.state
    return (
      <div className="random-container">
        <div className="sub-random-container">
          <h1 className="heading">Random Number</h1>
          <p className="desc">
            Generate a random Number in the range of 0 to 100
          </p>
          <button
            className="random-button"
            onClick={this.generatingRandomNumber}
          >
            Generate
          </button>
          <p className="desc">{random}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
