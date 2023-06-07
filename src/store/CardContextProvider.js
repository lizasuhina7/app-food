import React, {useReducer} from 'react'
import CardContext from './card-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cardReducer = (state, action) => {  //начальное состояние(просто состояние), совершаемое действие (получение данных)
    if(action.type === 'ADD_ITEM'){
        const updetedTotalAmount = state.totalAmount + (action.item.price * action.item.amount) //прибавляет к текущей сумме цену нового элемента, умноженное на количество

        const existingCartItemIndex = state.items.findIndex(item => {
            return item.id === action.item.id
        }) // находит индекс элемента, поступающего с action, в массиве
        
        const existindCartItem = state.items[existingCartItemIndex] //находим элемент в массиве

        let updatedItem
        let updatedItems
        
        if(existindCartItem){ // если элемент найден, то :
            updatedItem = {
                ...existindCartItem,
                amount: existindCartItem.amount + action.item.amount
            } // берем предыдущие данные этого элемента и изменяем amount
            updatedItems = [...state.items] //копируем исх массив
            updatedItems[existingCartItemIndex] = updatedItem // обращаемся к найденному элементу и обновляем его
        } else {
            updatedItem = {
                ...action.item
            }
            updatedItems = state.items.concat(updatedItem)//добавляет элемент в массив. объединяет массивы
        }
        return {
            items: updatedItems,
            totalAmount: updetedTotalAmount
        }
    } else if(action.type == 'REMOVE_ITEM'){
        const existingItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingCartItem = state.items[existingItemIndex]
        const updatedTotalAmount = state.totalAmount - existingCartItem.price

        let updatedItems
        let updatedItem
        
        if(existingCartItem.amount === 1){ //если количество =1, то полностью удаляем элемент из списка
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else{
            updatedItem = {...existingCartItem, amount: existingCartItem.amount-1}
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
        }

        return {
            items: updatedItems,
            totalAmount:updatedTotalAmount
        }
    } else if(action.type === 'CLEAR_CART'){
        return defaultCartState
    }
    
    return defaultCartState
}

const CardContextProvider = ({children}) => {
    const [cartState, dispatchCartAction] = useReducer(cardReducer, defaultCartState) //useReducer (функция, вызываемая при изменении состояния, первоначальное значение)

    const addItemHandler = item => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item: item,
        })
    }

    const removeItemHandler = id => {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id: id,
        })
    }

    const clearCartHandler = () => {
        dispatchCartAction({
            type: 'CLEAR_CART'
        })
    }

    const CartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearCart: clearCartHandler
    }

    
    return (
        <CardContext.Provider value={CartContext}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContextProvider