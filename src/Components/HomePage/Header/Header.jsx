import style from './Header.module.css'
import img from '../../../Images/HomePage/Header/img-phone.svg'
function Header() {
  return (
    <div className={style.parent}>
        <div>
            <p>At Tokners we are</p>
            <p>Reimagining social media through the power of the blockchain.</p>
            <p>We are creating social media 3.0 with influencers, celebrities and creators being able to launch their own digital currency by simply creating a profile with media content posted as Non fungible Tokens that can be owned and traded on the Tknrs network</p>
            <button>Learn More</button>
        </div>
        <div>
            <img src={img} alt="" />
        </div>

    </div>
  )
}

export default Header