import React from 'react'
import styles from './Header.module.css'
import sushiImage from '../../assets/sushi.jpg'
import HeaderCartButton from './HeaderCartButton'


const Header = ({onShowCart}) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Япона Кухня</h1> 
                <HeaderCartButton onShowCart={onShowCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={sushiImage} alt='sushiImage'/>
            </div>
        </>
    )
}

export default Header