import React from "react";

const ContainerSummary = ({clientName, tableNumber, clientOrder}) => {
    console.log('rrrrrr',clientOrder)
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
                    <li>{clientOrder.map(nombre=>nombre.productName)}</li>
                </section>

                <section>
                    <h3>Valor</h3>
                    <p>{clientOrder.map(precio=>precio.productPrice)}</p>
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