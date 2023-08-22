import Navigation from './Navigation/Nav.js'
import Product from './Products/Product.js';
import Recommended from './Recommended/Recommended.js';
import Sidebar from './Sidebar/Sidebar.js';

function App() {
  return <>
    <Sidebar />
    <Navigation />
    <Recommended />
    <Product />
  </>
}

export default App;
