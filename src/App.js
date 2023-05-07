  import React from 'react'
  import "./App.css"
  import Form from "./components/form/Form"

  
  function App() {

   
    const URLI = "https://api.openweathermap.org/weather?q=bilaspur&appid=7fef3d69c4777af376088aeab36e7934"

    return (

      <div className="App">

        <Form/>

      </div>
    )
  }
  
  export default App
  