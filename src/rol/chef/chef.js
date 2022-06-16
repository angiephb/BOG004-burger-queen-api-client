import HeaderView from "../../componentes/HeaderView.js";
import OrderChef from '../../componentes/orderChef.js'

const Chef = () => {
    return (
        <main>
            <header>
                <HeaderView />
            </header>
            <section>
                <p className='gretting'>Hola Chef, </p>
            </section>
            <section className='containerOrders'>
                <section className='btnOrders'>
                    <section>
                        <button type='button' className='btn btn-order' >Pendientes</button>
                    </section>

                    <section>
                        <button type='button' className='btn btn-order' >Entregadas</button>
                    </section>
                </section>
            </section>
            <section className='containerSummary'>
                <OrderChef />
            </section>
        </main>
    );

}


export default Chef;