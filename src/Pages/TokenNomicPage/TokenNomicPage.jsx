import Cards from '../../Components/TokenNomicPage/Cards/Cards'
import Header from '../../Components/TokenNomicPage/Header/Header'
import style from './TokenNomicPage.module.css'
import Footer from '../../Components/HomePage/Footer/Footer'
import gradient from '../../Images/HomePage/Header/bg.svg'
import gradient2 from '../../Images/HomePage/Footer/Ресурс 1@4x 2.svg'

function TokenNomicPage() {
  return (
    <div className={style.parent}>
        <Header />
        <Cards />
        <Footer />
<img className={style.gradient} src={gradient} alt="gradTYpe" />
<img className={style.gradient2} src={gradient2} alt="gradTYpe" />
    </div>
  )
}

export default TokenNomicPage