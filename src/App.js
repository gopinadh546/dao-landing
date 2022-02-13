import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './componants/Home';
import Header from './componants/Header'
import Footer from './componants/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
