import ButtonCount from './buttoncount';
import ContainerSummary from './containersumary.js'
import styles from '../rol/waiter/waiter.module.css'

const OrderWaiter = ({ clientOrder, setClientOrder, totalOrder, setTotalOrder,
    products, order, clickAlmuerzo, clickDesayuno, handleForm }) => {

    return (
        <main className={styles.containerAll}>
            <div className={styles.formMenu}>
                <section className={styles.containerInput}>
                    <section>
                        <input type='text' className={styles.inputCliente} placeholder='Nombre del cliente' value={order.clientName}
                            onChange={(e) => handleForm(e, 'clientName')} />
                    </section>
                    <section>
                        <input type='text' className={styles.inputMesa} placeholder='# Mesa' value={order.tableNumber}
                            onChange={(e) => handleForm(e, 'tableNumber')} />
                    </section>
                </section>
                <section className={styles.containerMenu}>
                    <section className={styles.btnMenu}>
                        <section>
                            <button type='button' className={styles.btnmenu} onClick={e => clickDesayuno(e)}>Desayuno</button>
                        </section>

                        <section>
                            <button type='button' className={styles.btnmenu} onClick={e => clickAlmuerzo(e)}>Almuerzo</button>
                        </section>
                    </section>
                    <section className={styles.products}>
                        {/* aqui van los productos */}
                        <ul>
                            {products.map(item =>
                                <li key={`item_${item.id}`}> {item.name}
                                    <ButtonCount
                                        clientOrder={clientOrder}
                                        name={item.name}
                                        productPrice={item.price}
                                        idProduct={item.id}
                                        setClientOrder={setClientOrder}
                                        setTotalOrder={/* handleTotal */ setTotalOrder}
                                        totalOrder={totalOrder}
                                        type={item.type}
                                        /* value={clientOrder.itemName}
                                        onChange={(e) => handleForm(e, 'itemName')} */ /></li>
                            )}
                        </ul>
                    </section>
                </section>
            </div>
            <section className={styles.containerSummary}>
                <ContainerSummary
                    clientName={order.clientName}
                    totalOrder={totalOrder}
                    tableNumber={order.tableNumber}
                    clientOrder={clientOrder}
                />
            </section>
        </main >
    )
}
export default OrderWaiter;