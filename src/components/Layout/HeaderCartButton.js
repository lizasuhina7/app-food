import React, {useContext, useEffect, useState} from 'react'
import styles from './HeaderCartButton.module.css'
import CardContext from '../../store/card-context'
import CartIcon from '../Cart/CartIcon'


const HeaderCartButton = ({onShowCart}) => {
    const [isButtonAnimated, setIsButtonAnimated] = useState(false) //анимация на кнопке корзины при добавлении в нее элемента
    
    const cartContext = useContext(CardContext)

    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount
    }, 0) // количесво элементов в корзине (получается путем суммирования кол-в элементов массива)

    const buttonClasses = `${styles.button} ${isButtonAnimated ? styles.bump : ''}` //изменение класса кнопки в зависимости от состояния isButtonAnimation
    
    useEffect(() => {
        if(cartContext.items.length === 0){
            return 
        } 
        setIsButtonAnimated(true) //изменение состояния isButtonAnimation 

        const timer = setTimeout(() => { // изменение состояния isButtonAnimation через 0.3 сек
            setIsButtonAnimated(false)
        }, 300)

        return () => {
            clearTimeout(timer) // очистка таймера
        }
    }, [cartContext.items]) // побочный эффект сработает при изменении cartContext.items, то есть при добавлении элемента в массив

    return (
        <button className={buttonClasses} onClick={onShowCart}>
            <span className={styles.icon}><CartIcon/></span>
            <span>Корзина</span>
            <span className={styles.badge}>
                {cartItemsNumber}
            </span>
        </button>
    )
}

export default HeaderCartButton