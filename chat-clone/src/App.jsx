import { useState } from 'react'
import './App.css'
import Messenger from './components/messenger/messenger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Messenger />
    </div>
  )
}

export default App
