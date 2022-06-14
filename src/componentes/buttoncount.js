import React, { useState } from 'react'

const ButtonCount = ({ setClientOrder, productName, clientOrder, productPrice, idProduct }) => {
    const [count, setCount] = useState(0)

    const counterPlus = (e) => {
        e.preventDefault()
        setCount(count + 1)
        //console.log('soy contador de',productName,'y mi valor es',count)
        addProduct({
            idProduct,
            productName,
            productPrice,
        })
        multiply([...clientOrder])
        // console.log('clientorder',clientOrder)
    }
    const counterLess = (e) => {
        e.preventDefault()
        setCount(count - 1)
        // console.log('soy contador de',productName,'y mi valor es',count)
        remove({
            idProduct,
            productName,
            productPrice,
        })
        multiply([...clientOrder])
        // console.log(clientOrder)
    }

    const addProduct = (foodObject) => {
        // console.log('foodobject',foodObject)
        if (clientOrder.find(({ idProduct }) => idProduct === foodObject.idProduct)) {
            let findItem = clientOrder.find(({ idProduct }) => idProduct === foodObject.idProduct);
            findItem['cantidad'] = count + 1;
            // console.log('find', findItem)
            setClientOrder([...clientOrder])
        } else {
            setClientOrder([...clientOrder, foodObject])
        }
    }

    const remove = (foodObject) => {
        if (clientOrder.find(({ idProduct }) => idProduct === foodObject.idProduct)) {
            let findItem = clientOrder.find(({ idProduct }) => idProduct === foodObject.idProduct);
            findItem['cantidad'] = count - 1;
            // console.log('find', findItem)
            setClientOrder([...clientOrder])
        } else {
            setClientOrder([...clientOrder, foodObject])
        }
    }
    const multiply = (foodObject) => {
        let price = foodObject.map(item => (item.productPrice) * (item.cantidad));
        console.log('precio', price)   
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