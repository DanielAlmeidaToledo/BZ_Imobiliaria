import Logo from '/logo/logofinal.png'
import './Default.css'

const Default = () => {
  return (
    <div className='default'>
        <div className='navbar'>
            <img className='logo' src={Logo} alt="" />
            <ul className='navOptions'>
              <li><a href="">Detalhes</a></li>
              <li><a href="" className='contactNav'>Contato</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Default