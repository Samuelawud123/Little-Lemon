import './footer.css';
import  Logo from '../../images/Logo.svg';

function Footer() {
    return (
    
        <div className="footer">
        <img src={Logo} alt="Little Lemon Logo" />
        <h3> &copy; Copyright Little Lemon</h3>
        </div>
       
    );
}
export default Footer;
