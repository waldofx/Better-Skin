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
import DetailProduct from "./pages/DetailProduct/detailproduct";
import userDashboard from "./pages/userDashboard/userDashboard";
import historyProduct from "./pages/userDashboard/menuHistoryProduct";
import transactionList from "./pages/userDashboard/menuTransactionList";
import settings from "./pages/userDashboard/menuSettings";
import aboutUs from "./pages/userDashboard/menuAboutUs";
import adminDashboard from "./pages/AdminDashboard/adminDashboard";
import dataPembayaran from "./pages/AdminDashboard/dataPembayaran";
import dataPengiriman from "./pages/AdminDashboard/dataPengiriman";
import dataPengguna from "./pages/AdminDashboard/dataPengguna";
import dataProduct from "./pages/AdminDashboard/dataProduct";

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
                        <Route path="/DetailProduct" exact component={DetailProduct} />
                        <Route path="/DetailProduct/:id" exact component={DetailProduct} />
                        <Route path="/userDashboard" exact component={userDashboard} />
                        <Route path="/historyProduct" exact component={historyProduct} />
                        <Route path="/transactionList" exact component={transactionList} />
                        <Route path="/settings" exact component={settings} />
                        <Route path="/aboutUs" exact component={aboutUs} />
                        <Route path="/adminDashboard" exact component={adminDashboard} />
                        <Route path="/dataPembayaran" exact component={dataPembayaran} />
                        <Route path="/dataPengguna" exact component={dataPengguna} />
                        <Route path="/dataPengiriman" exact component={dataPengiriman} />
                        <Route path="/dataProduct" exact component={dataProduct} />
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
