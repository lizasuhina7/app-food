import React, {useContext} from 'react'
import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import CardContext from '../../store/card-context'

const Cart = ({onHideCart}) => {
    const cartContext = useContext(CardContext)

    const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}` 
    const hasItems = cartContext.items.length > 0

    const removeCartItemHandler = id => {
        cartContext.removeItem(id)
    }

    const addCartItemHandler = item => {
        cartContext.addItem({...item, amount: 1})
    }

    const cartItems = <ul className={styles['cart-items']}>{cartContext.items.map(item => (
        <CartItem 
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addCartItemHandler.bind(null, item)}
            onRemove={removeCartItemHandler.bind(null, item.id)}
        />
    ))}</ul>

    
    return (
        <Modal onHideCart={onHideCart}>
            {cartItems}
            <div className={styles.total}> 
                <span>Итого: </span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}> 
                <button className={styles['button--alt']} onClick={onHideCart}>Закрыть</button>
                {hasItems && <button className={styles.button}>Заказать</button>}
            </div>
        </Modal>
    )
}

export default Cart