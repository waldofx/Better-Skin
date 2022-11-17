import "./App.css";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

//import pages
import Home from "./pages/home";
import Product from "./pages/product";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/product" exact component={Product} />
            </Switch>
        </Router>
    );
}

export default App;
