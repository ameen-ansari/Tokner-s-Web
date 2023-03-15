import './App.css';
// import Navbar from './Components/HomePage/Navbar/Navbar';
import TokenNomicPage from './Pages/TokenNomicPage/TokenNomicPage';
import TeamPage from './Pages/TeamPage/TeamPage';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/team' element={<TeamPage />} />
      <Route path='/token' element={<TokenNomicPage />} />
    </Routes>
  );
}

export default App;
