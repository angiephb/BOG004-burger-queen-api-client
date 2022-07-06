import React from "react";
import styles from '../rol/waiter/waiter.module.css'

const ContainerSummary = ({ clientName, tableNumber, clientOrder, totalOrder }) => {


    return (
        <section className={styles.containerResume}>
            <section className={styles.containerClient}>
                <h2>Tu Orden</h2>
                <section className={styles.dataClient}>
                    <p>Cliente: <span> {clientName} </span> </p>
                    <p>Mesa: <span> {tableNumber} </span> </p>
                </section>
            </section>
            <hr></hr>
            <section className={styles.containerAbstract}>
                <section>
                    <h3>Producto</h3>
                    <ul className={styles.productList}>
                        {clientOrder.map(item =>
                            <li key={`item_${item.idProduct}`}>
                                {item.name} x{item.qty}
                            </li>
                        )}
                    </ul>
                </section>

                <section>
                    <h3>Valor</h3>
                    <ul className={styles.productValue}>
                        {clientOrder.map(item =>
                            <li key={`item_${item.idProduct}`}>
                                {item.productPrice * item.qty}
                            </li>
                        )}
                    </ul>
                </section>
            </section>
            <hr></hr>
            <section className={styles.total}>
                <h3>Total: $  </h3>
                <p> {totalOrder}</p>
            </section>
        </section>

    )
}

export default ContainerSummary;