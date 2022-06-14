import React from "react";

const ContainerSummary = ({ clientName, tableNumber, clientOrder, }) => {
    console.log('nuevo client order', ...clientOrder)
    return (
        <section>
            <section className='containerClient'>
                <h2>Tu Orden</h2>
                <p>Cliente: {clientName}</p>
                <p>Mesa: {tableNumber}</p>
            </section>
            <hr></hr>
            <section className='containerAbstract'>
                <section>
                    <h3>Producto</h3>
                    <ul>
                        {clientOrder.map(item =>
                            <li key={`item_${item.idProduct}`}> {item.productName} {item.cantidad}  </li> )} 
                    </ul>
                </section>

                <section>
                    <h3>Valor</h3>
                    <ul>
                        {clientOrder.map(item =>
                            <li key={`item_${item.idProduct}`}> {item.productPrice}</li> )} 
                    </ul>
                </section>
            </section>
            <hr></hr>
            <section className='total'>
                <h3>Total:</h3>
                <h3>$</h3>
            </section>
        </section>

    )
}

export default ContainerSummary;