import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Router>
        <Route path="/search" component={Search} />
      </Router>
    </div>
  );
}

export default App;
