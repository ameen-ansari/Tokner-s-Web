import Card1 from "../../Components/HomePage/Cards/Card1";
import Header from "../../Components/HomePage/Header/Header";
import Navbar from "../../Components/HomePage/Navbar/Navbar";
import style from './HomePage.module.css'

function HomePage() {
  return (
    <div className={style.Parent}>
      <Navbar />
      <Header />
      <Card1 />
    </div>
  );
}

export default HomePage;
