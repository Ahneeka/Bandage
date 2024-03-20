import Hero from "./components/Hero/Hero";
import Items from "./components/Items/Items";
import Navbar from "./components/Navbar/Navbar";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products/Products";
import Popular from "./components/Popular/Popular";
import Product2 from "./components/Product2/product2";
import Popular2 from "./components/Popular2/Popular2";
import Brand from "./components/Brand/Brand";
import Logos from "./components/Logos/Logos";
import Posts from "./components/Posts/Posts";
import Consulting from "./components/Consulting/Consulting";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Items />
      <Products />
      <Popular />
      <Product2 />
      <Popular2 />
      <Brand />
      <Logos />
      <Posts />
      <Consulting />
    </div>
  );
}

export default App;
