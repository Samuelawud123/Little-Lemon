import './header.css';
import  restaurantfood from '../../images/restaurantfood.jpg';
function Header() {
    return (
    <div className="header">
    <div className="header-content">
    <h1> Little Lemon </h1>
    <h2>Chicago</h2>
    <p> We are Family owned <br/>Mediterranean restaurant, <br/>
        focused on traitional<br/> recipes served with
        a modern <br/>twist.       
    </p>
    <h4 className="reserve-button"> Reserve a Table</h4>
    </div>
        <div className="image-container">
        <img src={restaurantfood} alt="Little Lemon Logo" className= "image" />
        </div>
    </div>
    );
}
export default Header;
