import React from 'react'
import { Link } from 'react-router-dom'
import{AiOutlineClose} from 'react-icons/ai';
import './Cart.css';
const Cart = (props) => {
  const incqty = (product) => 
  {
      const exsit = props.cart.find((x) => 
      {
          return x.id === product.id
      })
      props.setCart(props.cart.map((curElm) => 
      {
          return curElm.id === product.id ? {...exsit, qty: exsit.qty + 1} : curElm
      }))
  }
  const decqty = (product) => 
    {
      const exsit = props.cart.find((x) => 
      {
          return x.id === product.id
      })
      props.setCart(props.cart.map((curElm) => 
      {
          return curElm.id === product.id ? {...exsit, qty: exsit.qty - 1} : curElm
      }))
    }
    const removeproduct = (product) => 
    {
        const exsit = props.cart.find((x) => 
        {
            return x.id === product.id
        })
        if(exsit.qty > 0)
        {
            props.setCart(props.cart.filter((x) => 
            {
                return x.id !== product.id
            }))
        }
    }
    const Totalprice = props.cart.reduce((price, item) => price + item.qty * item.Price, 0)
  return (
    <>
    <div className='cartcontainer'>
    {props.cart.length === 0 && 
        <div className='emptycart'>
        <h2 className='empty'>Cart is Empty</h2>
        <Link to='/items' className='emptycartbtn'>Shop Now</Link>
        </div>
        }
      <div className='contant'>
        {
          props.cart.map((item)=>{
            return(
              <div className='cart_item' key={item.id}>
                <div className='img'>
                  <img src={item.Img} alt={item.Desc}></img>
                </div>
                <div className='detail'>
                <div className='info'>
                  <h3>{item.Name}</h3>
                  <h4>{item.cat}</h4>
                  <h5>Price: ₹{item.Price}</h5>
                  <div className='qty'>
                                    <button className='incqty' onClick={()=>{incqty(item)}} >+</button>
                                    <input type='text' value={item.qty}></input>
                                    <button className='decqty' onClick={()=>{decqty(item)}}>-</button>
                                </div>
                                <h4 className='subtotal'>sub total: ₹{item.Price * item.qty}</h4>
                                </div>
                                <div className='close'>
                                <button onClick={() => removeproduct(item)} className=''>Remove</button>
                                </div>
                  </div>
              </div>
            )
          })
        }
      </div>
        {
            props.cart.length > 0 &&
            <>
            <h2 className='totalprice'>total: ₹ {Totalprice}</h2>
            <button className='checkout'>Checkout</button>
            </>
        }
    </div>
    </>
  )
}

export default Cart