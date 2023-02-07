import './App.css';
import Header from './header';
import Nav from './nav';
import Main from './main';
import Footer from './footer';



function App() {
  return (
    <div>
    <meta name="Little-Lemon" content="You can order your food from for out little lemon restaurant through this cite"/>
    <meta name="og:title" content="Little Lemon"/>
    <meta name="og:description" content="Food ordering and reservation page for little lemon restaurant"/>
    <meta name="og:image" content="./images/Logo.svg"/>
    <Nav/>
    <Header/>
    <Main/>
    <Footer/>

    </div>
  );
}
 
export default App;
