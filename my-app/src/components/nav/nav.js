import './nav.css';
import  Logo from '../../images/Logo.svg';
import { Link, Routes, Route} from 'react-router-dom'; 


function Nav() {
    return ( 
    
     <nav className="navbar">
        <div  className="logo">
        <img src={Logo} alt="Little Lemon Logo"  />
        </div>
        <div >
            <ul className="lists">
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about"> About</Link></li>
                <li> <Link to="/menu"> Menu</Link></li>
                <li> <Link to="/reservation">Reservation</Link></li>
                <li> <Link to="/">Order_Online</Link></li>
                <li> <Link to="/">Log-in</Link></li>
            </ul>
        </div>
    </nav>
    )
}
export default Nav;
