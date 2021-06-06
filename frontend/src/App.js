import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/product/:id">
            <ProductScreen />
          </Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
