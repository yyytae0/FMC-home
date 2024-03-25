import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Entry from './pages/Entry';
import Roulette from './pages/Roulette';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Entry/>}/>
        <Route path='/roulette' element={<Roulette/>}/>
      </Routes>
    </Router>
  )
}

export default App
