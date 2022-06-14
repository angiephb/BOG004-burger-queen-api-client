import React, { useState } from 'react'

const ButtonCount = ({ setClientOrder, productName, clientOrder, productPrice, idProduct, setTotalOrder, totalOrder }) => {
    const [count, setCount] = useState(0)

    const counterPlus = (e) => {
        e.preventDefault()
        setCount(count + 1)
        //console.log('soy contador de',productName,'y mi valor es',count)
        addProduct({
            idProduct,
            productName,
            productPrice,
            cantidad: 1,
        })
        multiply([...clientOrder]) 
    }

    const counterLess = (e) => {
        e.preventDefault()
        setCount(count - 1)
        // console.log('soy contador de',productName,'y mi valor es',count)
        remove({
            idProduct,
            productName,
            productPrice,
            cantidad: 1,
        })
        multiply([...clientOrder])
    }

    const addProduct = (foodObject) => {
        if (clientOrder.find(({ idProduct }) => idProduct === foodObject.idProduct)) {
            let findItem = clientOrder.find(({ idProduct }) => idProduct === foodObject.idProduct);
            findItem['cantidad'] = count + 1;
            setClientOrder([...clientOrder])
        } else {
            setClientOrder([...clientOrder, foodObject])
        }
    }

    const remove = (foodObject) => {
        if (clientOrder.find(({ idProduct }) => idProduct === foodObject.idProduct)) {
            let findItem = clientOrder.find(({ idProduct }) => idProduct === foodObject.idProduct);
            findItem['cantidad'] = count - 1;
            setClientOrder([...clientOrder])
        } else {
            setClientOrder([...clientOrder, foodObject])
        }
    }
    const multiply = () => {  
        console.log('client', clientOrder)  
        let price = clientOrder.map(item => item.productPrice * item.cantidad);
        console.log('price', price)
        let sum= price.reduce((acc, cur) => acc+cur, 0)
        // let number = price.toString()
        // let int= number.valueOf()
        console.log('sumaa', sum )
        setTotalOrder(sum)
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