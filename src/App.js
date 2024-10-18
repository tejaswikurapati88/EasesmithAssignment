import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import AddToCartModel from './components/AddToCartModel'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element ={ <AddToCartModel /> }/>
        <Route path="*" element = {<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
