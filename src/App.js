import './App.css';
import Navbar from './Components/HomePage/Navbar/Navbar';
import TokenNomicPage from './Pages/TokenNomicPage/TokenNomicPage';
import TeamPage from './Pages/TeamPage/TeamPage';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className='Parent'>
      <Navbar />
      {/* <HomePage /> */}
      {/* <TeamPage /> */}
      <TokenNomicPage />
    </div>
  );
}

export default App;
