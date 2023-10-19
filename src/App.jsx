import React from 'react'
import Header from "./Header"
import Body from './Body'

function App() {
  const[darkMode, setDarkMode] = React.useState(false)

  function toggle() {
    setDarkMode(prevState => !prevState)
  }

  return (
    <div className='container'>
      <Header toggle={toggle} darkMode={darkMode} />
      <Body darkMode={darkMode}/>
    </div>
  )
}

export default App
