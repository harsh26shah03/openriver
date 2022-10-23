import "./App.css";
import Category from "./components/Category";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Latermidbody from "./components/Latermidbody";
import Midbody from "./components/Midbody";
import Navbar from "./components/Navbar";
import Postbody from "./components/Postbody";
import Prebody from "./components/Prebody";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Prebody />
        <div className="spacing"></div>
        <Collection />
        <div className="spacing"></div>
        <Midbody />
        <div className="spacing"></div>
        <Latermidbody />
        <div className="spacing"></div>
        <Postbody />
        <div className="spacing"></div>
        <Category />
        <div className="spacing"></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
