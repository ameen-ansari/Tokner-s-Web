import Navbar from "../../Components/HomePage/Navbar/Navbar";
import style from './HomePage.module.css'

function HomePage() {
  return (
    <div className={style.Parent}>
      <Navbar />
    </div>
  );
}

export default HomePage;
