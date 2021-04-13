import "./styles.css";
import "./App.css";
import Navbar from './Components/Navbar'
import List from './Components/List'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="homepage col-12">
        <h2>Welcome to getStockData();</h2>
        A simple and easy way<br /> to get the lastest news about stocks<br /> using the Yahoo Finance API (RapidAPI).
      <p>The Lastest data about your desired stocks<br /> just ONE CLICK away!!!</p>
      </div>
      <List />
      <div id="aboutus">
        <div className="col-12">
          <h2>About Us</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br /> Dicta deleniti similique aut qui iusto voluptatum quas, fugit maiores totam perferendis obcaecati incidunt<br /> tempore aspernatur nulla beatae minus quibusdam laboriosam unde.
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed ad aut voluptates provident saepe aliquid neque, cumque dolorum magnam rem laboriosam quia corrupti omnis,<br /> culpa at nam officiis doloremque.</p>
        </div>


      </div>
      <Footer />
    </div>
  );
}
