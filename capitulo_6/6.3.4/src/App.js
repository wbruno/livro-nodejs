import './App.css'
import { useState, useEffect } from 'react'
function THead(props) {
  return (
    <thead>
      <tr> 
        { props.items.map((item,i) => <th key={i}>{item}</th>) }
      </tr>
    </thead>
  )
}
function TBody(props) {
  return (
    <tbody>
    {
      props.items.map(item => {
        return <TLine key={item._id} item={item} />
      })
    }
    </tbody>
  )
}
function TLine(props) {
  return (
    <tr>
      <td>{props.item._id}</td>
      <td>{props.item.name}</td>
      <td>{props.item.patent}</td>
    </tr>
  )
}
function App() {
  const [troopers, setTroopers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/troopers')
        .then(response => response.json())
        .then(data => setTroopers(data))
  }, [])

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
