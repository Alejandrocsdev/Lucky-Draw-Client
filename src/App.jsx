// CSS
import './assets/css/global.css'
// Libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Custom Functions
import usePiBrowser from './hooks/usePiBrowser'
// Layout
import Layout from './Layout'
// Public Pages
import Home from './pages/Home'

function App() {
  const { MODE } = import.meta.env
  Pi.init({ version: '2.0', sandbox: MODE === 'development' })
  const origin = usePiBrowser()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home origin={origin} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
