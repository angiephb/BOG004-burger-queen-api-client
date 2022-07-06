import React, { useState, useEffect } from 'react'
import styles from '../rol/chef/chef.module.css'


const Timer = () => {
    const [active, setActive] = useState(false);
    const [paused, setPaused] = useState(true);
    const [time, setTime] = useState(0)

    useEffect(() => {
        let interval = null;

        if (active && paused === false) {
            interval = setInterval(() => {
                setTime(time => time + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval)
        }
    }, [active, paused]);

    const Start = () => {
        setActive(true);
        setPaused(false);
    }

    const Pause = () => {
        setPaused(!paused)
    }

    /*   const Reset = () => {
          setActive(false);
          setTime(0)
      } */

    const btnStart = (
        <section className={styles.btnStart} onClick={Start}>Inicio <i className='fa-solid fa-circle' ></i></section>
    );
    const btnActive = (
        <section className={styles.btnPause} onClick={Pause}>Fin <i className='fa-solid fa-circle' ></i></section>
        /*  <section className='btnsActive'>
             {<section className='finish' onClick={Reset}>Reset</section>}
             <section className='pause' onClick={Pause}>Fin</section>
         </section> */
    );

    return (
        <section className={styles.containerTimer}>
            <section className={styles.containerImg}>
                <button className={styles.timer}><i className='fa-solid fa-stopwatch'></i></button>
            </section>
            <section className={styles.containerTime}>
                <p className={styles.time}>
                    {('0' + Math.floor((time / 3600000) % 60)).slice(-2)}
                </p>
                <p className={styles.time}>
                    {('0' + Math.floor((time / 60000) % 60)).slice(-2)}
                </p>
                <p className={styles.time}>
                    {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
                </p>
                {/* <p className='time'>
                    {('0' + ((time / 10) % 100)).slice(-2)}
                </p> */}
            </section>
            <section className={styles.controlButtons}>
                    <section>{active ? btnActive : btnStart}</section>
            </section>
        </section>
    );
}

export default Timer