import Card1 from "../../Components/HomePage/Cards/Card1";
import DetailsSec from "../../Components/HomePage/DetailsSec/DetailsSec";
import Footer from "../../Components/HomePage/Footer/Footer";
import Header from "../../Components/HomePage/Header/Header";
// import Navbar from "../../Components/HomePage/Navbar/Navbar";
import QuestionSec from "../../Components/HomePage/QuestionSec/QuestionSec";
import style from './HomePage.module.css'
import gradient from '../../Images/HomePage/Header/bg.svg'
import gradient2 from '../../Images/HomePage/Footer/Ресурс 1@4x 2.svg'

function HomePage() {
  return (
    <div className={style.Parent}>
      {/* <Navbar /> */}
      <Header />
      <Card1 />
      <QuestionSec />
      <DetailsSec  />
      <Footer />
      <img className={style.gradient} src={gradient} alt="" />
      <img className={style.gradient2} src={gradient2} alt="" />
    </div>
  );
}

export default HomePage;
