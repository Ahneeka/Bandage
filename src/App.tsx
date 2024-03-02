import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
