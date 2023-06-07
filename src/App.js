import React, {useState} from 'react'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'
import CardContextProvider from './store/CardContextProvider';


function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false) //состояние карзины показать/закрыть

  const showCartHandler = () => {
    setCartIsVisible(true)
  }

  const hideCartHandler = () => {
    setCartIsVisible(false)
  }
  
  return (
    <CardContextProvider>
      {cartIsVisible && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CardContextProvider>
    
  );
}

export default App;
