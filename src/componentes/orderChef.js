import React from 'react';
import Timer from './timer.js';
import styles from '../rol/waiter/waiter.module.css'

const OrderChef = ({ order, products }) => {
    return (
        <section className={styles.containerResume}>
            <section className={styles.containerClient}>
                <h2>Tu Orden</h2>
                <section className={styles.dataClient}>
                    <p>Cliente: <span>{order.client}</span></p>
                    <p>Mesa: <span>{order.userId}</span> </p>
                </section>
            </section>
            <hr></hr>
            <section className={styles.containerAbstract}>
                <section>
                    <h3>Producto</h3>
                    <ul className={styles.productList}>
                        {products.map(item =>
                            <li key={item.product.id}>
                                {item.product.name} X{item.qty}
                            </li>
                        )}
                    </ul>
                </section>

                <section>
                    <h3>Valor</h3>
                    <ul className={styles.productValue}>
                        {products.map(item =>
                            <li key={item.product.id}>
                                {item.product.price}
                            </li>
                        )}
                    </ul>
                </section>
            </section>
            <hr></hr>
            <section className={styles.containerBtns}>
                <Timer />
            </section>
        </section>

    )
}

export default OrderChef;