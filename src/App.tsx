import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EntryPage from './pages/EntryPage';
import RoulettePage from './pages/RoulettePage';
import MarblePage from './pages/MarblePage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<EntryPage/>}/>
        <Route path='/roulette' element={<RoulettePage/>}/>
        <Route path='/marble' element={<MarblePage/>}/>
      </Routes>
    </Router>
  )
}

export default App
