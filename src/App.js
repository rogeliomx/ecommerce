
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./containers/Header";
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
      <div className="App"> 
        <Router>    
                <Header />
                <ProductListing />
                  <Routes>
                    <Route path="/" exact component={ProductListing} />
                    
                    <Route path="/product/:productId" component={ProductDetails} />
                    <Route>404 Not Found!</Route>
                  </Routes>
                
        </Router>
{/* 
        <Router>
                <Header />
                <Switch>
                  <Route path="/" exact component={ProductListing} />
                  <Route path="/product/:productId" component={ProductDetails} />
                  <Route>404 Not Found!</Route>
                </Switch>
      </Router> */}

      </div>
  );  
}

export default App;