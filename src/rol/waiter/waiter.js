import HeaderView from "../../componentes/HeaderView.js";

const Waiter = () => {
    return (
        <main>
            <header>
                <HeaderView />
            </header>
            <section className='btnWaiter'>
                <p className='gretting'>Hola Mesero, </p>
            <form>

     </form>
                <aside className='orderbtn'>
                    <div className='btns'>
                    <button type="button" className='btn btn-default btn-circle'><i className='fa-solid fa-plus'></i>
                    </button>
                    <label className="labelOrder">Nueva Orden</label>
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