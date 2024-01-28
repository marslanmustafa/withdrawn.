import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Login, SearchPage } from './pages/index'

function App() {

  return (
    <div id='app'>
    <Router>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
