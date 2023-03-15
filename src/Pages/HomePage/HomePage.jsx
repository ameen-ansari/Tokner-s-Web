import Card1 from "../../Components/HomePage/Cards/Card1";
import DetailsSec from "../../Components/HomePage/DetailsSec/DetailsSec";
import Footer from "../../Components/HomePage/Footer/Footer";
import Header from "../../Components/HomePage/Header/Header";
// import Navbar from "../../Components/HomePage/Navbar/Navbar";
import QuestionSec from "../../Components/HomePage/QuestionSec/QuestionSec";
import style from './HomePage.module.css'

function HomePage() {
  return (
    <div className={style.Parent}>
      {/* <Navbar /> */}
      <Header />
      <Card1 />
      <QuestionSec />
      <DetailsSec  />
      <Footer />
    </div>
  );
}

export default HomePage;
