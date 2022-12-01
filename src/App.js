import "./App.css";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

//import pages
import Home from "./pages/home";
import Product from "./pages/product";
import CreateUser from "./pages/createUser";
import login from "./pages/login";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/product" exact component={Product} />
                <Route path="/user" exact component={CreateUser} />
                <Route path="/login" exact component={login} />
            </Switch>
        </Router>
    );
}

export default App;
