import React, { useState } from "react";

const OrderWaiter = () => {

    const [ products, setProducts] = useState([ ])

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
                setProducts(() => [...response.map(producto=>producto.name)])
                console.log('respuestA', response.map(producto=>producto.name))
            })
            .catch(error => console.error('Error:', error))
    }

    return (
        <main>
            <form>
                <input type='text' placeholder='Nombre del cliente' />
                <input type='text' placeholder='# Mesa' />
            <section className='btnMenu'>
                <section>
                    <button type="button" className="btn btn-menu"  onClick={() => { getListProducts(products); }}>Desayuno</button>
                </section>

                <section>
                    <button type="button" className="btn btn-menu">Almuerzo</button>
                </section>
            </section>
            </form>


            <section>
                {/* aqui van los productos */}
                <ul>
                    {products}
                </ul>
            </section>
        </main>
    )
}
export default OrderWaiter;