import ButtonCount from './buttoncount';
import ContainerSummary from './containersumary.js'

const OrderWaiter = ({ clientOrder, setClientOrder, totalOrder, setTotalOrder,
    products, order, clickAlmuerzo, clickDesayuno, handleForm }) => {

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
                            <button type='button' className='btn btn-menu' onClick={e => clickDesayuno(e)}>Desayuno</button>
                        </section>

                        <section>
                            <button type='button' className='btn btn-menu' onClick={e => clickAlmuerzo(e)}>Almuerzo</button>
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
            <section className='containerSummary'>
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