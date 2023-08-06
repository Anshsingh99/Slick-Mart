import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { useAuth0 } from "@auth0/auth0-react";
import './Items.css'

const Items = (props) => {
  const { loginWithRedirect,isAuthenticated } = useAuth0();
    const filtterproduct=(product)=>{
    const update=props.prod.filter((item)=>{
      return item.cat===product
    })
    props.setCat(update)
  }
  const Allitems=()=>{
    props.setCat(props.prod);
  }
  const addCart=(curElm)=>{
    isAuthenticated ?
     props.addToCart(curElm)
      :
    loginWithRedirect()
  }

  return (
    <>
    {
      props.close ?
      <div className='items_details'>
      <div className='container'>
      <button onClick={() => props.setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
        {
          props.details.map((curElm) => 
          {
              return(
                  <div className='productbox'>
                      <div className='img-box'>
                          <img src={curElm.Img} alt={curElm.Desc} ></img>
                      </div>
                      <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <h4>{curElm.Cat}</h4>
                          <h5>{curElm.Desc}</h5>
                          <h3>MRP: {curElm.Price}</h3>
                          <button onClick={()=>{addCart(curElm)}}>Add To Cart</button>
                      </div>
                  </div>
              )
          })
        }

      </div>
    </div> : null
    }
    
    <div className='items'>
      <div className='header'><h3>PRODUCTS</h3></div>
      <div className='container'>
        <div className='options'>
          <div className='categories'>
            <h3>Categories</h3>
                  <ul>
                  <li onClick={()=>Allitems()}>All Products</li>
                    <li onClick={()=>filtterproduct ("Mobiles")}>Mobiles</li>
                    <li onClick={()=>filtterproduct ("Laptop")}>Laptops</li>
                    <li onClick={()=>filtterproduct ("Bags")}>Bags</li>
                    <li onClick={()=>filtterproduct ("Smart Watch")}>Smart Watch</li>
                    <li onClick={()=>filtterproduct ("Books")}>Books</li>
                  </ul>
          </div>     
        </div>
        <div className='products'>
          <div className='container'>
            {
             props.cat.map((items)=>
             { 
               if(items.Name.toLowerCase().includes(props.search)){
                return(
                  <div className='box' key={items.id}>
                    <div className='pic'>
                      <img src={items.Img} alt={items.Desc}></img>
                    <div className='buttons'>
                      {
                        isAuthenticated ?
                        <li onClick={()=>{props.addToCart(items)}}><AiOutlineShoppingCart/></li>
                        :
                        <li onClick={loginWithRedirect()}><AiOutlineShoppingCart/></li>
                      }
                      <li><AiOutlineHeart/></li>
                      <li onClick={()=>{props.view(items)}}><BsEye/></li>
                    </div>
                    </div>
                    <div className='desc'>
                      <p>{items.Name}</p>
                      {/* <h4>{items.Desc}</h4> */}
                      <h5>MRP: ₹{items.Price}</h5>
                    </div>
                  </div>
                )
               }
               return null;
             }) 
            }

          </div>

        </div>
      </div>
          
        


    </div>
    
    </>
  )
}

export default Items