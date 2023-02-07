import './App.css';
import  restaurantfood from './images/restaurantfood.jpg';
function Header() {
    return (
    <div>
    <h1> Little Lemon </h1>
    <h2>Chicago</h2>
    <h3>We are Family owned Mediterranean restaurant focused on traitional reciptes served with a modern twist</h3>
        <div>
        <img src={restaurantfood} alt="Little Lemon Logo" />
        </div>
    </div>
    );
}
export default Header;
