import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../NavBar'
import {DeleteCart} from '../Redux/Action/Index'

function ViewCart() {
    
    const getData =useSelector(state=>state.AddCart.list)
    const [total,setTotal]=useState(0)
    const dispatch =useDispatch()

    useEffect(()=>{
        let sum =0
        for(let i=0;i<getData.length;i++){
            sum+=(getData[i].id.price * getData[i].id.quantity)
        }
        setTotal(Math.round(sum))
    },[getData])

    const removeitem=(id)=>{
        dispatch(DeleteCart(id))
    }
  return (
    <>
        <NavBar/>
        <div className='container' style={{top:'16%',    position: 'absolute'}}>
            {getData.map((element,i)=>(
                <div style={{display:'grid',gridTemplateColumns:'100px 500px 1fr 1fr 1fr',alignItems: 'center', maxHeight:'110px',marginBottom:'10px'}} key={i}>
                <img style={{width:'100%',aspectRatio:'4/3',objectFit:'contain'}} src={element.id.image}/>
                <h5 style={{    alignItems: 'center',display: 'flex'}}>{element.id.title}</h5>
                <Quantity element={element}/>
                <p style={{    display: 'flex',alignItems: 'center'}}>{element.id.price * element.id.quantity}</p>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}> <button style={{maxWidth:'100px',width:'100%',border:'none',borderRadius:'10px',maxHeight:'50px',height:'100%'}} onClick={()=>removeitem(element.id)} >Remove</button>
            
                </div> </div>
            ))}
            <h4>Total - {total} </h4>
        </div>
</>
  )
}

export default ViewCart




function Quantity({ element, AddTOCartBtn }) {
    const [getQuantity, setQuantity] = useState(element.id.quantity)
    const increase = () => {
        setQuantity(getQuantity + 1)
    }
    const decrease = () => {

        if (getQuantity > 0) {
            setQuantity(getQuantity - 1)
        }
    }
    const eventHandle = () => {

    }
    return (
        <>
            <div style={{ display: 'flex', margin: '20px', justifyContent: 'space-around',alignItems:'center', maxWidth: '100px', width: '100%', }}>
                <i onClick={decrease} className="fa fa-minus" aria-hidden="true"></i>
                <input onChange={(e) => eventHandle()} value={getQuantity} style={{ maxWidth: '50px' }} />
                <i onClick={increase} className="fa fa-plus" aria-hidden="true"></i>
            </div>
            {/* <button onClick={() => AddTOCartBtn(element, getQuantity)} className="btn btn-primary">Add to cart</button> */}

        </>
    )
}