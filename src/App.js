import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import StyleState from "./context/StyleState";
import Keyboard from "./components/Keyboard";
import SmallNavs from "./components/SmallNavs";
import Product from "./components/Product";
import { fullkeyboard, tklsample, smallsample } from "./images/index.js";
import { Full, Small, TKL } from "./images/index";
import { Slim, Heavy, Wireless } from "./images/index";
import Mouse from "./components/Mouse";

function App() {
  return (
    <StyleState>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/keyboards/full">
              <SmallNavs
                image1={Full}
                image2={Small}
                image3={TKL}
                title1="full"
                title2="TKL"
                title3="60%"
                title4="small"
                path="/keyboards"
              />
              <Product image={fullkeyboard} />
            </Route>
            <Route exact path="/keyboards/TKL">
              <SmallNavs
                image1={Full}
                image2={Small}
                image3={TKL}
                title1="full"
                title2="TKL"
                title3="60%"
                title4="small"
                path="/keyboards"
              />
              <Product image={tklsample} />
            </Route>
            <Route exact path="/keyboards/small">
              <SmallNavs
                image1={Full}
                image2={Small}
                image3={TKL}
                title1="full"
                title2="TKL"
                title3="60%"
                title4="small"
                path="/keyboards"
              />
              <Product image={smallsample} />
            </Route>
            <Route exact path="/keyboards">
              <SmallNavs
                image1={Full}
                image2={Small}
                image3={TKL}
                title1="full"
                title2="TKL"
                title3="60%"
                title4="small"
                path="/keyboards"
              />
              <Keyboard />
            </Route>
            <Route exact path="/mouse/wireless">
              <SmallNavs
                image1={Slim}
                image2={Heavy}
                image3={Wireless}
                title1="Slim"
                title2="Heavy"
                title3="Wireless"
                title4="wireless"
                path="/mouse"
              />
              <Product image={wirelessample} />
            </Route>
            <Route exact path="/mouse/Heavy">
              <SmallNavs
                image1={Slim}
                image2={Heavy}
                image3={Wireless}
                title1="Slim"
                title2="Heavy"
                title3="Wireless"
                title4="wireless"
                path="/mouse"
              />
              <Product image={heavysample} />
            </Route>
            <Route exact path="/mouse/Slim">
              <SmallNavs
                image1={Slim}
                image2={Heavy}
                image3={Wireless}
                title1="Slim"
                title2="Heavy"
                title3="Wireless"
                title4="wireless"
                path="/mouse"
              />
              <Product image={slimsample} />
            </Route>
            <Route exact path="/mouse">
              <SmallNavs
                image1={Slim}
                image2={Heavy}
                image3={Wireless}
                title1="Slim"
                title2="Heavy"
                title3="Wireless"
                title4="wireless"
                path="/mouse"
              />
              <Mouse />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </StyleState>
  );
}

export default App;
