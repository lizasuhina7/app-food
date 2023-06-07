import React, {useContext} from 'react'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CardContext from '../../../store/card-context'


const MealItem = ({id, name, description, price}) => {
    const cartContext = useContext(CardContext)

    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price
        }) // при клике на кнопку "добавить" из формы, данные добавляются в массив корзины через фукцию из контекста
    }

    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>${price.toFixed(2)}</div>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem