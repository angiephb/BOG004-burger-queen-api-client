import React, { useState } from 'react';
import HeaderView from "../../componentes/HeaderView.js";
import OrderWaiter from "../../componentes/orderWaiter.js";

const Waiter = () => {

    const [clientOrder, setClientOrder] = useState([])
    const [totalOrder, setTotalOrder] = useState(0)
    const [products, setProducts] = useState([])
    const [isLunch, setIsLunch] = useState(true)
    const [order, setOrder] = useState({
        clientName: '',
        tableNumber: '',
    })
    console.log('clientOrder en padre', clientOrder)

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
                //console.log('is lunch', isLunch)
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
        // console.log('desayuno')
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

    const sendOrder = (e) => {
        e.preventDefault()
        const url = 'http://localhost:8080';
        const token = localStorage.getItem('Token:')
        setClientOrder(currentOrder=>{
         return currentOrder.map(product=>{
                return ({
                    qty:product.cantidad,
                        product: {
                            id: product.idProduct,
                            name: product.productName,
                            price: product.productPrice,
                            image: '',
                            type: product.type,
                            dateEntry: new Date()
                        }
                })
            })
        })
        fetch(url + '/orders', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
                userId: '',
                client: order.clientName,
                products: clientOrder,
                status: 'pending',
                dateEntry: new Date()
            }), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + token,
            }
        }).then(res => console.log(res.json()))
    }

    return (
        <main>
            <header>
                <HeaderView />
            </header>
            <section className='btnWaiter'>
                <p className='gretting'>Hola Mesero, </p>
                <section>
                    <OrderWaiter
                        clientOrder={clientOrder}
                        setClientOrder={setClientOrder}
                        totalOrder={totalOrder}
                        setTotalOrder={setTotalOrder}
                        products={products}
                        order={order}
                        clickDesayuno={clickDesayuno}
                        clickAlmuerzo={clickAlmuerzo}
                        handleForm={handleForm}
                    />
                </section>

                <aside className='orderbtn'>
                    <div className='btns'>
                        <button type="button" onClick={sendOrder} className='btn btn-default btn-circle'><i className='fa-solid fa-plus'></i>
                        </button>
                        <label className="labelOrder">Enviar Orden</label>
                    </div>
                    <div className='btns'>
                        <button type="button" className='btn btn-default btn-circle'><i className='fa-solid fa-clipboard-list'></i>
                        </button>
                        <label className='labelOrder'>Tus Ordenes</label>
                    </div>
                </aside>
            </section>
        </main>
    );
}


export default Waiter;