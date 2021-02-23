import Header from "./componants/sections/Header"
import Home from "./componants/pages/Home"
import About from "./componants/pages/About"
import Contact from "./componants/pages/Contact"
import Gallery from "./componants/pages/Gallery"
import SeeMore from "./componants/pages/SeeMore"
import Whatwedo from "./componants/pages/Whatwedo"
import Footer from "./componants/sections/Footer"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/contact" component={Contact} />
          <Route  path="/gallery" component={Gallery} />
          <Route  path="/seemore" component={SeeMore} />
          <Route  path="/whatwedo" component={Whatwedo} />
        </Switch>
      
      <Footer/>
      </Router>

    </div>
  );
}

export default App;