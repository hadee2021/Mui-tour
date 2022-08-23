import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import SearchAppBar from './components/Appbar'
import Tour from './pages/Tour'
function App() {
  return (
    <div>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </div>
  )
}

export default App
