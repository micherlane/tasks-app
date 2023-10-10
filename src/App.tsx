import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { AboutPage } from './pages/AboutPage'
import { TasksPage } from './pages/TasksPage'
import { TaskAdd } from './pages/TasksPage/components/TaskAdd'
import { NotFoundPage } from './pages/NotFoundPage'
import { TaskDetail } from './pages/TasksPage/components/TaskDetail'

function App() {

  return (
    <BrowserRouter>
      <div>
      <header>Tasks App Web</header>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/tasks'>
          <Route index element={<TasksPage/>}/>
          <Route path=':id' element={<TaskDetail/>}/>
          <Route path='add' element={<TaskAdd/>}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>

      <footer>
        <p>Fim por fim feito por mim!</p>
      </footer>

    </div>
    </BrowserRouter>
   
  )
}

export default App
