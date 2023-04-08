import style from './Header.module.css'
import img1 from '../../../Images/HomePage/Header/img-phone.svg'
import img2 from '../../../Images/HomePage/Header/img (1).svg'
function Header() {
  return (
    <div className={style.parent}>
        <div>
            <p>At Tokners we are</p>
            <p>Reimagining social media through the power of the blockchain.</p>
            <p>We are creating social media 3.0 with influencers, celebrities and creators being able to launch their own digital currency by simply creating a profile with media content posted as Non fungible Tokens that can be owned and traded on the Tknrs network</p>
            <button className='flex justify-center items-center'>Learn More</button>
        </div>
        <div>
            <img src={img1} alt="heroImage" />
            <img src={img2} alt="heroImage" />
        </div>

    </div>
  )
}

export default Header