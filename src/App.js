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
import UserDashboard from "./pages/userDashboard/userDashboard";
import HistoryProduct from "./pages/userDashboard/menuHistoryProduct";
import TransactionList from "./pages/userDashboard/menuTransactionList";
import Settings from "./pages/userDashboard/menuSettings";
import AboutUs from "./pages/userDashboard/menuAboutUs";
import AdminDashboard from "./pages/AdminDashboard/adminDashboard";
import DataPembayaran from "./pages/AdminDashboard/dataPembayaran";
import DataPengiriman from "./pages/AdminDashboard/dataPengiriman";
import TambahDataProduct from "./pages/AdminDashboard/tambahDataProduct";
import TambahDataPengguna from "./pages/AdminDashboard/tambahDataPengguna";
import TambahDataPengiriman from "./pages/AdminDashboard/tambahDataPengiriman";
import DataPengguna from "./pages/AdminDashboard/dataPengguna";
import DataProduct from "./pages/AdminDashboard/dataProduct";

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
                        <Route path="/userDashboard" exact component={UserDashboard} />
                        <Route path="/historyProduct" exact component={HistoryProduct} />
                        <Route path="/transactionList" exact component={TransactionList} />
                        <Route path="/settings" exact component={Settings} />
                        <Route path="/aboutUs" exact component={AboutUs} />
                        <Route path="/adminDashboard" exact component={AdminDashboard} />
                        <Route path="/dataPembayaran" exact component={DataPembayaran} />
                        <Route path="/dataPengguna" exact component={DataPengguna} />
                        <Route path="/dataPengiriman" exact component={DataPengiriman} />
                        <Route path="/dataProduct" exact component={DataProduct} />
                        <Route path="/tambahDataProduct" exact component={TambahDataProduct} />
                        <Route path="/tambahDataPengguna" exact component={TambahDataPengguna} />
                        <Route path="/tambahDataPengiriman" exact component={TambahDataPengiriman} />
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
