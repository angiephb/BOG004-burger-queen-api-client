import React, { useState } from 'react'

const ButtonCount = ({setClientOrder, productName, clientOrder,productPrice}) => {
    const [count, setCount] = useState(0)
    const counterPlus = (e) => {
        e.preventDefault()
        setCount(count + 1)
        console.log('soy contador de',productName,'y mi valor es',count)
        setClientOrder([...clientOrder,{
            productName, 
            productPrice
        }])
        console.log(clientOrder)
    }
    const counterLess = (e) => {
        e.preventDefault()
        setCount(count - 1)
        console.log('soy contador de',productName,'y mi valor es',count)
        setClientOrder({productName, productPrice, ...clientOrder})
        console.log(clientOrder)
    }
    
    return (

        <section className='btnCount'>
            <button className='btnPlus' onClick={(e) => counterPlus(e)}><i className='fa-solid fa-plus'></i></button>
            <p className='count'>{count}</p>
            <button className='btnLess' onClick={(e) => counterLess(e)}><i className='fa-solid fa-minus'></i></button>
        </section>



    )
}

export default ButtonCount