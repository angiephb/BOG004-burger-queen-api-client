import React, { useState } from 'react'

const ButtonCount = ({ setClientOrder, productName, clientOrder, productPrice, idProduct, setTotalOrder }) => {
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
        let price = clientOrder.map(item => item.productPrice * item.cantidad);
        let number = price.toString()
        let int= parseInt(number)
        console.log('enteros',int  )
        setTotalOrder(int)
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