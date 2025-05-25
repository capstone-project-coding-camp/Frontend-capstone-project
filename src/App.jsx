import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(routes).map(([path, element]) => (
          <Route key={path} path={path} element={element()} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App