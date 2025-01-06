import "./index.css";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Pizza from "./Components/Pizza";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Menu pizzaObj={Pizza} />
      <Footer />
    </div>
  );
}

export default App;
