import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/login/Login'
import SearchPage from "./pages/searchPage/SearchPage";

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
