import React from "react";

const ContainerSummary = ({clientName, tableNumber}) => {
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
                    <p>Café Americano</p>
                </section>

                <section>
                    <h3>Valor</h3>
                    <p>$ 500</p>
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