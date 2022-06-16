import React, { useState } from 'react'

const ButtonCount = ({ setClientOrder, productName, clientOrder, productPrice, idProduct, setTotalOrder, totalOrder,type }) => {
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
            type,
        })
        multiply({
            idProduct,
            productName,
            productPrice,
            cantidad: 1,
            type,
        })
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
            type,
        })
        multiply({
            idProduct,
            productName,
            productPrice,
            cantidad: 1,
            type,
        })
    }

    const addProduct = (foodObject) => {
        console.log('foodobject', foodObject)
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
    
    const multiply = (foodObject) => {
        const sameProduct = clientOrder.some(product => product.idProduct === foodObject.idProduct)
        const newArr = sameProduct ? [...clientOrder] : [...clientOrder, foodObject]
        let price = newArr.map(item => item.productPrice * item.cantidad);
        let sum = price.reduce((acc, cur) => acc + cur, 0)
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