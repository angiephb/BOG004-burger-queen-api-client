import React, { useState } from 'react';
import ButtonCount from './buttoncount';
import ContainerSummary from './containersumary.js'

const OrderWaiter = () => {
    const [clientOrder, setClientOrder] = useState([])
    const [products, setProducts] = useState([])
    const [isLunch, setIsLunch] = useState(true)
    const [order, setOrder] = useState({
        clientName: '',
        tableNumber: '',
       
    })
    /* const [formValue, setFormValue] = useState({

    }) */

    const getListProducts = () => {
        const url = 'http://localhost:8080';
        const token = localStorage.getItem('Token:')

        fetch(url + '/products', {
            method: 'GET', // or 'PUT'
            body: JSON.stringify(), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + token,
            }
        }).then(res => res.json())
            .then(response => {
                console.log('is lunch', isLunch)
                if (isLunch) {
                    setProducts(response.filter(product => product.type === 'Desayuno'))
                } else {
                    setProducts(response.filter(product => product.type === 'Almuerzo'))
                }
            })
            .catch(error => console.error('Error:', error))
    }

    const clickDesayuno = (e) => {
        e.preventDefault()
        console.log('desayuno')
        setIsLunch(() => false)
        getListProducts()
    }
    const clickAlmuerzo = (e) => {
        e.preventDefault()
        setIsLunch(true)
        getListProducts()
    }

    const handleForm = (e, inputName) => {
        console.log('evento', e.target.value)
        setOrder(currentOrder => {
            return ({ ...currentOrder, [inputName]: e.target.value })
        })
    }

    return (
        <main>
            <div className='formMenu'>
                <section className='containerInput'>
                    <section>
                        <input type='text' className='inputCliente' placeholder='Nombre del cliente' value={order.clientName}
                            onChange={(e) => handleForm(e, 'clientName')} />
                    </section>
                    <section>
                        <input type='text' className='inputMesa' placeholder='# Mesa' value={order.tableNumber}
                            onChange={(e) => handleForm(e, 'tableNumber')} />
                    </section>
                </section>
                <section className='containerMenu'>
                    <section className='btnMenu'>
                        <section>
                            <button type="button" className="btn btn-menu" onClick={e => clickDesayuno(e)}>Desayuno</button>
                        </section>

                        <section>
                            <button type="button" className="btn btn-menu" onClick={e => clickAlmuerzo(e)}>Almuerzo</button>
                        </section>
                    </section>
                    <section className='products'>
                        {/* aqui van los productos */}
                        <ul>
                            {products.map(item =>
                                <li key={`item_${item.id}`}> {item.name}
                                    <ButtonCount
                                        clientOrder={clientOrder}
                                        productName={item.name}
                                        productPrice={item.price}
                                        idProduct={item.id}
                                        setClientOrder={setClientOrder}
                                        value={clientOrder.itemName}
                                        onChange={(e) => handleForm(e, 'itemName')} /></li>
                            )}
                        </ul>
                    </section>
                </section>
            </div>
            <section className='containerSummary'>
                <ContainerSummary
                    clientName={order.clientName}
                    tableNumber={order.tableNumber}
                    clientOrder={clientOrder}
                    />
            </section>
        </main >
    )
}
export default OrderWaiter;