import React, {useContext} from 'react'
import styles from './MealList.module.css'
import MealItem from './MealItem/MealItem'
import DUMMY_MEALS from '../../dummy-meals'
import Card from '../UI/Card';

const MealList = () => {
    const MealList = DUMMY_MEALS.map(meal => (
        <MealItem 
            key={meal.id} 
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ))
    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {MealList}
                </ul>
            </Card>
        </section>
    )
}

export default MealList