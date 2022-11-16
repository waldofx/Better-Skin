import "./App.css";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

//import pages
import Home from "./pages/home";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
