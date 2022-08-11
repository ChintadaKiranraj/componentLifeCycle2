import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  onToggleButton = () => {
    this.setState(prevState => ({showClock: !prevState.showClock}))
  }

  render() {
    const {showClock} = this.state

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleButton}
        >
          {showClock ? 'hideClock' : 'showClock'}
        </button>

        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
