import  Logo from './images/Logo.svg';
import  greeksalad from './images/greeksalad.jpg';
import  lemondessert from './images/lemondessert.jpg';
import  bruchetta from './images/bruchetta.svg';

function Main() {
    return (
    <div>
      <div>
      <h1> This weekss specials!</h1>
      <h2> Online Menu </h2>.
      </div>
      <div>
        <div>
        <img src={greeksalad} alt="Little Lemon Logo" />
            <div>
            <h3>Greek Salad</h3>
            <h3>$12.99</h3>
            </div>
        <h4>The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta chees, garnished with crunchy garlic and rosemary croutons</h4>
        <h3> Order a delivery</h3>
        </div>
        <div>
        <img src={bruchetta} alt="Little Lemon Logo" />
            <div>
            <h3>Bruchetta</h3>
            <h3>$5.99</h3>
            </div>
        <h4>Our bruchetta is made from grilled bread that has been smeared with garluic and seaconed with salt and olieve oil</h4>
        <h3> Order a delivery</h3>
        </div>
        <div>
        <img src={lemondessert} alt="Little Lemon Logo" />
            <div>
            <h3>Lemon Desert</h3>
            <h3>$7.99</h3>
            </div>
        <h4>This comes straight from grandmas reciepe book, every last ingriedient has been sourced and is as autherntic as can be imained</h4>
        <h3> Order a delivery</h3>
        </div>
      </div>
    </div>

    );
}
export default Main;
