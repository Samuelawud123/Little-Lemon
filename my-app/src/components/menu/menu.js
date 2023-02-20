import './menu.css';
import  greeksalad from '../../images/greeksalad.jpg';
import  lemondessert from '../../images/lemondessert.jpg';
import  bruchetta from '../../images/bruchetta.svg';

function Menu() {
    return (
    <div >
      <div className="main-header">
      <h1> This weeks specials!</h1>
      <h2> Online Menu </h2>.
      </div>
      <div className="main-card">
        <div className="card">
        <div className="image-one-container"><img className="image-one" src={greeksalad} alt="Little Lemon Logo" /></div>
            <div className="item-name">
            <h3>Greek Salad</h3>
            <h4 >$12.99</h4>
            </div>
        <p>The famous greek salad of <br/>crispy lettuce, peppers, olives<br/> and our chicago style feta <br/>cheese, garnished with crunchy<br/> garlic and rosemary<br/> croutons</p>
        <h3> Order a delivery</h3>
        </div>
        <div  className="card">
        <div className="image-one-container"><img className="image-one"  src={bruchetta} alt="Little Lemon Logo" /></div>
            <div className="item-name">
            <h3>Bruchetta</h3>
            <h4>$5.99</h4>
            </div>
        <p>Our bruchetta is made from <br/>grilled bread that has been <br/>smeared with garluic and <br/>seaconed with salt and olive<br/> oil</p>
        <h3> Order a delivery</h3>
        </div>
        <div className="card">
        <div className="image-one-container"><img className="image-one" src={lemondessert} alt="Little Lemon Logo" /></div>
            <div className="item-name">
            <h3>Lemon Desert</h3>
            <h4>$7.99</h4>
            </div>
        <p>This comes straight from <br/>grandmas reciepe book, every <br/>last ingriedient has been<br/> sourced and is as autherntic<br/> as can be imained</p>
        <h3> Order a delivery</h3>
        </div>
      </div>
    </div>

    );
}
export default Menu;
