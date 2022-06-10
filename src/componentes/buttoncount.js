import React, { useState } from 'react'

const ButtonCount = ({setClientOrder, productName, clientOrder, productPrice, idProduct}) => {
    const [count, setCount] = useState(0)
   
    const counterPlus = (e) => {
        e.preventDefault()
        setCount(count + 1)
        console.log('soy contador de',productName,'y mi valor es',count)
        setClientOrder(addProduct([...clientOrder,{
            idProduct,
            productName, 
            productPrice,
        }]))

        console.log('clientorder',clientOrder)
    }
    const counterLess = (e) => {
        e.preventDefault()
        setCount(count - 1)
        console.log('soy contador de',productName,'y mi valor es',count)
        setClientOrder(remove(productName))
        console.log(clientOrder)
    }

    const addProduct = (clientOrder) => {
        if (clientOrder.find(({idProduct}) => idProduct === clientOrder.idProduct)) {
            let findItem = clientOrder.findIndex(({idProduct}) => idProduct === clientOrder.idProduct);
            clientOrder[findItem].cantidad++;
        }else{
            clientOrder.push({...clientOrder, cantidad:1 })
            setClientOrder({...clientOrder, cantidad:1 })
        }
        console.log('aquimas', [...clientOrder])
        return [...clientOrder]
    }
    
    const remove = (item) =>{
        clientOrder.map((element) => {
            console.log('item', item)
            if(element.productName === item){
                clientOrder.splice(clientOrder.indexOf(element),1)
            }
        })
        console.log('aqui', [...clientOrder])
        return [...clientOrder]
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