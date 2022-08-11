import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()}

  componentDidMount() {
    setInterval(this.tickTick, 1000)
    console.log('component did mount is called')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount is called')
    clearInterval(this.timerID)
  }

  tickTick = () => {
    this.timerID = this.setState({date: new Date()})
  }

  render() {
    console.log('Render is called')

    const {date} = this.state

    return (
      <div className="clock-container">
        <h3>{date.toLocaleDateString()}</h3>
        <h1 className="time">{date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}
export default Clock
