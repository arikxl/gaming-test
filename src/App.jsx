
import './App.css'
import HomePage from './pages/HomePage';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import GameDetailsPAge from './pages/GameDetailsPAge';

function App() {






  return (
    <>
      <Header />


      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/game/:gameId' element={<GameDetailsPAge />} />
      </Routes>

    </>
  )
}

export default App
