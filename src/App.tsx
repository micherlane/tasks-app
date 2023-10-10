import { BrowserRouter, NavLink } from 'react-router-dom'
import './App.css'
import { Routes } from './routes/routes'

function App() {

  return (
    <BrowserRouter>
      <div>
      <header>Tasks App Web</header>

      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/tasks'>Tasks</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </nav>
    
      <Routes/>

      <footer>
        <p>Fim por fim feito por mim!</p>
      </footer>

    </div>
    </BrowserRouter>
   
  )
}

export default App
