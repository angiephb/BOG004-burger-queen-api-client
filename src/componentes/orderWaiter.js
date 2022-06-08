import React, { useState } from "react";
import ButtonCount from "./buttoncount";

const OrderWaiter = () => {

    const [products, setProducts] = useState([])
    const [isLunch, setIsLunch] = useState(true)

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

    return (
        <main>
            <form className='formMenu'>
                <section className='containerInput'>
                    <section>
                        <input type='text' className='inputCliente' placeholder='Nombre del cliente' />
                    </section>
                    <section>
                        <input type='text' className='inputMesa' placeholder='# Mesa' />
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
                                <li key={`item_${item.id}`}>{item.name}<ButtonCount /></li>
                            )}
                        </ul>
                    </section>
                </section>
            </form>
        </main >
    )
}
export default OrderWaiter;