
import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'

function App() {
  

  return (
    <>
      <Header/>
      <ProductCard picture="https://picsum.photos/id/1/200/300" name="Apple Laptop" description="cjned dsj dsck" price="500"/>
      <ProductCard picture="https://picsum.photos/id/2/200/300" name="Gaming Laptop" description="cjne ds dsc" price="5000"/>
    </>
  )
}

export default App
