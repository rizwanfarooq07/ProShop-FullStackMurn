import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/orders/:id">
              <OrderScreen />
            </Route>
            <Route path="/shipping">
              <ShippingScreen />
            </Route>
            <Route path="/payment">
              <PaymentScreen />
            </Route>
            <Route path="/placeorder">
              <PlaceOrderScreen />
            </Route>
            <Route path="/login">
              <LoginScreen />
            </Route>
            <Route path="/register">
              <RegisterScreen />
            </Route>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route path="/product/:id">
              <ProductScreen />
            </Route>
            <Route path="/cart/:id?">
              <CartScreen />
            </Route>
            <Route path="/admin/userlist">
              <UserListScreen />
            </Route>
            <Route path="/admin/user/:id/edit">
              <UserEditScreen />
            </Route>
            <Route exact path="/admin/productlist">
              <ProductListScreen />
            </Route>
            <Route exact path="/admin/productlist/:pageNumber">
              <ProductListScreen />
            </Route>
            <Route path="/admin/product/:id/edit">
              <ProductEditScreen />
            </Route>
            <Route path="/admin/orderlist">
              <OrderListScreen />
            </Route>
            <Route exact path="/search/:keyword">
              <HomeScreen />
            </Route>
            <Route exact path="/page/:pageNumber">
              <HomeScreen />
            </Route>
            <Route exact path="/search/:keyword/page/:pageNumber">
              <HomeScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
