import './App.css'
import { Component } from 'react'
class THead extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <thead>
        <tr> 
          { this.props.items.map((item,i) => <th key={i}>{item}</th>) }
        </tr>
      </thead>
    )
  }
}
class TBody extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <tbody>
      {
        this.props.items.map((item,i) => {
          return <TLine key={i} item={item} />
        })
      }
      </tbody>
    )
  }
}
class TLine extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <tr>
        <td>{this.props.item._id}</td>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.patent}</td>
      </tr>
    )
  }
}
function App() {
  const troopers = [{
      "_id": "5ff30c2e7952ec31de6b8e1a",
      "name": "CT-27-5555",
      "nickname": "Fives",
      "patent": "Soldier"
    },
    {
      "_id": "5ff30c2e7952ec31de6b8e18",
      "name": "CC-2224",
      "nickname": "Cody",
      "patent": "Commander"
    }
  ]
  return (
    <>
      <h1>Stormtroopers</h1>
      <table id="target">
          <THead items={['ID', 'Name', 'Patent']} />
          <TBody items={troopers} />
      </table>
    </>
  )
}
export default App
