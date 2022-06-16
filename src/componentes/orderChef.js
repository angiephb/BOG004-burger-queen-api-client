import React from "react";

const OrderChef = ({ clientName, tableNumber}) => {

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
                        
                    </ul>
                </section>

                <section>
                    <h3>Valor</h3>
                    <ul>
                        
                    </ul>
                </section>
            </section>
            <hr></hr>
            <section className='containerBtns'>
                
            </section>
        </section>

    )
}

export default OrderChef;