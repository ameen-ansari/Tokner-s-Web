import './App.css';
import Navbar from './Components/HomePage/Navbar/Navbar';
import TeamPage from './Pages/TeamPage/TeamPage';
// import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className='Parent'>
      <Navbar />
      {/* <HomePage /> */}
      <TeamPage />
    </div>
  );
}

export default App;
