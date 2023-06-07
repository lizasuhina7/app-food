import React from 'react'

const CardContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {}
    //начальные значения контекста
})

export default CardContext