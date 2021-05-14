import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Services from "./components/services/services.components";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";

import Zoom from "react-reveal/Fade";

function App() {
  return (
    <div className="App">
      <Zoom>
        <Header />
      </Zoom>
      <HomePage />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
