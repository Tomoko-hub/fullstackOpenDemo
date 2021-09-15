import React from 'react'

const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App= () => {

  /* const now = new Date()
  const a = 10
  const b = 20 */

  return (
  <>
    <h1>Greetings</h1>
    <Hello />
    <Footer />
  </>
  )
}

export default App;
