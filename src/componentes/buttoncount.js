import React,{useState} from 'react'

const ButtonCount = () =>{
const [count, setCount]= useState(0)
const counterPlus=(e)=>{
e.preventDefault()
setCount(count + 1)
}
const counterLess=(e)=>{
    e.preventDefault()
    setCount(count - 1)
    }
return(
<main>
    <section className='btnCount'>
        <button className='btnPlus' onClick={(e)=>counterPlus(e)}><i className='fa-solid fa-plus'></i></button>
        <p className='count'>{count}</p>
        <button className='btnLess'onClick={(e)=>counterLess(e)}><i className='fa-solid fa-minus'></i></button>
    </section>
</main>


)
}

export default ButtonCount