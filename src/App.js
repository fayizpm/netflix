import "./app.css"
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar";
import Row from "./components/Rows/Row";
import { original, action, comedy, Horror, Romance, Trending } from './url'

function App() {

  return (
    <div>
      <Navbar />
      <Banner />
      <Row url={original} tittle='Netflix original' />
      <Row url={Trending} tittle='Trending' small />
      <Row url={action} tittle='Action Movies' small />
      <Row url={comedy} tittle='Comedy Movies' small />
      <Row url={Horror} tittle='Horror Movies' small />
      <Row url={Romance} tittle='Romance Movies' small />


    </div>
  );
}

export default App;
