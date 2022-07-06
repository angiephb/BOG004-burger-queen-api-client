import React, { useState } from 'react';
import HeaderView from "../../componentes/HeaderView.js";
import OrderChef from '../../componentes/orderChef.js'
import styles from './chef.module.css'

const Chef = () => {
    const [order, setOrder] = useState([])
    console.log('orden', order);
    const getListOrders = () => {
        const url = 'http://localhost:8080';
        const token = localStorage.getItem('Token:')

        fetch(url + '/orders', {
            method: 'GET', // or 'PUT'
            body: JSON.stringify(), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + token,
            }
        }).then(res => res.json())
            .then(response => {
                // console.log('response', response)
                setOrder(response)
            })
            .catch(error => console.error('Error:', error))
    }

    const clickPending = (e) => {
        e.preventDefault()
        getListOrders()
    }

    return (
        <main>
            <header>
                <HeaderView />
            </header>
            <section>
                <p className={styles.gretting}>Hola Chef, </p>
            </section>
            <section className={styles.containerOrders}>
                <section className={styles.btnOrders}>
                    <section>
                        <button type='button' className={styles.btnorder} onClick={e => clickPending(e)} >Pendientes</button>
                    </section>

                    <section>
                        <button type='button' className={styles.btnorder} >Entregadas</button>
                    </section>
                </section>
            </section>
            <section className={styles.containerAll}>
            {order.map(item =>
                <section className={styles.containerSummary}>
                    <ul className={styles.orderList}>
                        <li key={`item_${item.userId}`}>
                            <OrderChef
                                order={item}
                                products={item.products}
                                />
                        </li>

                    </ul>
                </section>
            )}
            </section>
        </main>
    );

}
export default Chef;