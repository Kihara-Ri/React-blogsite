import './App.css'
import Home from './Pages/Home'
import NavBar from './Components/NavBar/NavBar'

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <main>
        <Home></Home>
      </main>
    </div>
  )
}

export default App
