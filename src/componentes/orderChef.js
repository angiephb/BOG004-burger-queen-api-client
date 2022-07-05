import React from 'react';
import Timer from './timer.js';

const OrderChef = ({ order, products }) => {
    return (
        <section>
            <section className='containerClient'>
                <h2>Tu Orden</h2>
                <p>Cliente: {order.client}</p>
                <p>Mesa: {order.userId} </p>
            </section>
            <hr></hr>
            <section className='containerAbstract'>
                <section>
                    <h3>Producto</h3>
                    <ul>
                        {products.map(item =>
                            <li key={item.product.id}>
                                {item.product.name} X{item.qty}
                            </li>
                        )}
                    </ul>
                </section>

                <section>
                    <h3>Valor</h3>
                    <ul>
                        {products.map(item =>
                            <li key={item.product.id}>
                                {item.product.price}
                            </li>
                        )}
                    </ul>
                </section>
            </section>
            <hr></hr>
            <section className='containerBtns'>
                <Timer />
            </section>
        </section>

    )
}

export default OrderChef;