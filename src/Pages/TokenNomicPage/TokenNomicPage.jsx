import Cards from '../../Components/TokenNomicPage/Cards/Cards'
import Header from '../../Components/TokenNomicPage/Header/Header'
import style from './TokenNomicPage.module.css'
import Footer from '../../Components/HomePage/Footer/Footer'

function TokenNomicPage() {
  return (
    <div className={style.parent}>
        <Header />
        <Cards />
        <Footer />
    </div>
  )
}

export default TokenNomicPage