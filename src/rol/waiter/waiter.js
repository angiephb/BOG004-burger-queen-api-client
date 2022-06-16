import HeaderView from "../../componentes/HeaderView.js";
import OrderWaiter from "../../componentes/orderWaiter.js";

const Waiter = () => {

    const sendOrder = () => {
        const url = 'http://localhost:8080';
        const token = localStorage.getItem('Token:')

        fetch(url + '/orders', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
                userId: 15254,
                client: 'Carol Shaw',
                products: [
                    {
                        qty: 5,
                        product: {
                            id: 1214,
                            name: 'Sandwich de jamón y queso',
                            price: 1000,
                            image: 'https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg',
                            type: 'Desayuno',
                            dateEntry: '2022-03-05 15:14:10'
                        }
                    }
                ],
                status: 'pending',
                dateEntry: '2022-03-05 15:14:10'
            }), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + token,
            }
        }).then(res => console.log(res.json()))
    }


    return (
        <main>
            <header>
                <HeaderView />
            </header>
            <section className='btnWaiter'>
                <p className='gretting'>Hola Mesero, </p>
                <section>
                    <OrderWaiter />
                </section>

                <aside className='orderbtn'>
                    <div className='btns'>
                        <button type="button" onClick={sendOrder} className='btn btn-default btn-circle'><i className='fa-solid fa-plus'></i>
                        </button>
                        <label className="labelOrder">Enviar Orden</label>
                    </div>
                    <div className='btns'>
                        <button type="button" className='btn btn-default btn-circle'><i className='fa-solid fa-clipboard-list'></i>
                        </button>
                        <label className='labelOrder'>Tus Ordenes</label>
                    </div>
                </aside>
            </section>
        </main>
    );
}


export default Waiter;