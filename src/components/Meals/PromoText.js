import React from 'react'
import styles from './PromoText.module.css'

const PromoText = () => {
    return (
        <section className={styles['promo-text']}>
            <h2>Онлайн Суши Ресторан Япона Кухня</h2>
            <p>
                Япона кухня - это онлайн суши ресторан, в котором любимые суши и другие блюда национальной японской кухни делает команда профессиональный поваров. 
            </p>
            <p>
                Быстрая работа и качественная продукция, а также самые настоящие компоненты придаютхороший вкус блюдам, дарят наслаждение от трапезы.
            </p>
        </section>
    )
}

export default PromoText