import Hero from "./components/Hero/Hero";
import Items from "./components/Items/Items";
import Navbar from "./components/Navbar/Navbar";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Items />
      <Products />
    </div>
  );
}

export default App;
