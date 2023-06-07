import React, {useContext, useEffect, useState} from 'react'
import styles from './HeaderCartButton.module.css'
import CardContext from '../../store/card-context'
import CartIcon from '../Cart/CartIcon'


const HeaderCartButton = ({onShowCart}) => {
    const [isButtonAnimated, setIsButtonAnimated] = useState(false)
    
    const cartContext = useContext(CardContext)

    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount
    }, 0)

    const buttonClasses = `${styles.button} ${isButtonAnimated ? styles.bump : ''}`
    
    useEffect(() => {
        if(cartContext.items.length === 0){
            return 
        } 
        setIsButtonAnimated(true)

        const timer = setTimeout(() => {
            setIsButtonAnimated(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [cartContext.items])

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