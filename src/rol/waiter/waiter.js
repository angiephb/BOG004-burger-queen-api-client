import HeaderView from "../../componentes/HeaderView.js";

const Waiter = () => {
    return (
        <main>
            <header>
                <HeaderView />
            </header>
            <section>
                <p className='gretting'>Hola Mesero, </p>
                <i className='fa-solid fa-circle-plus'></i>
            </section>
        </main>

    );

}


export default Waiter;