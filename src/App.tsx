import './App.css'
import { TasksPage } from './pages/TasksPage'
import { TasksProvider } from './providers/TaskProvider'

function App() {

  
  return (
        <TasksProvider>
            <div>
              <header>Tasks App Web</header>
              <main>
                <TasksPage />
              </main>
              <footer>
                <p>Fim por fim feito por mim!</p>
              </footer>
            </div>
        </TasksProvider>
  )
}

export default App
