import React, {useRef, useState} from 'react'
import styles from './MealItemForm.module.css'
import Input from '../../UI/Input'


const MealItemForm = ({id, onAddToCart}) => {
    const [isAmountValid, setIsAmountValid] = useState(true)
    const amountInputRef = useRef() // обращаемся к элементу инпута в компоненте
   
    
    const submitHandler = event => {
        event.preventDefault()
        setIsAmountValid(true)
        
        const inputAmount = amountInputRef.current.value // получаем значение из инпута
        if(inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10){
            setIsAmountValid(false)
            return
        }

        onAddToCart(+inputAmount) // отправляем через свойство значение, которое потом объединяетя с данными об элементе и добавляется в общий массив
    }
    

    return ( 
        <form className={styles.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label='Количество:'
                input={{
                    id: id, 
                    type: 'number', 
                    min: '1',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>Добавить</button>
            {!isAmountValid && <p>Пожалуйста, введите количество от 1 до 10</p>}
        </form>
    )
}

export default MealItemForm