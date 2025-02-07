import { useState } from 'react'
import Counter from './components/Counter'
import Addition from './components/Addition'

import './App.css'


function App() {
  let [page, setPage] = useState('counter');

  if (page === 'addition')
    return(
    <>
      <nav>
        <button onClick={() => {setPage('counter')}}>Counter 🤯</button>
        <button onClick={() => {setPage('addition')}}>Addition Game 🤯</button>
      </nav>

      <Addition />

    </>
    )
  else
  return (
    <>
      <nav>
        <button onClick={() => {setPage('counter')}}>Counter 🤯</button>
        <button onClick={() => {setPage('addition')}}>Addition Game 🤯</button>
      </nav>

      <Counter />
    </>
    )
  // return(
  // <>
  //   {/* <Counter />
  //   <Counter /> */}
  // <Addition />

  // </>
  // )
}

export default App


