import { useState } from 'react';
import Navigation from './Navigation/Nav.js'
import Product from './Products/Product.js';
import Recommended from './Recommended/Recommended.js';
import Sidebar from './Sidebar/Sidebar.js';
import './index.css'

//Database
import products from '../src/db/data.js'
import Card from './components/Card.js';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")

  //Input filter
  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)

  //Radio filter
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  //Buttons filter
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products
    if (query) {
      filteredProducts = filteredItems
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected)
    }

    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) =>
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    )
  }

  const result = filteredData(products, selectedCategory, query)

  return <>
    <Sidebar handleChange={handleChange} />
    <Navigation query={query} handleInputChange={handleInputChange} />
    <Recommended handleClick={handleClick} />
    <Product result={result} />
  </>
}

export default App;
