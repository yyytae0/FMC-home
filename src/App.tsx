import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Entry from './pages/Entry';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Entry/>}/>
        <Route path='/roulette'/>
      </Routes>
    </Router>
  )
}

export default App
