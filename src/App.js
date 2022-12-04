import "./App.css";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

//import pages
import Home from "./pages/home";
import Product from "./pages/product";
import CreateUser from "./pages/createUser";
import login from "./pages/login";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/product" exact component={Product} />
                        <Route path="/register" exact component={CreateUser} />
                        <Route path="/login" exact component={login} />
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
