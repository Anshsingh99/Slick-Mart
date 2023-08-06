import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
const Home = (props) => {
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
                          <img src={curElm.Img} alt={curElm.Desc}></img>
                      </div>
                      <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <h4>{curElm.Cat}</h4>
                          <h5>{curElm.Desc}</h5>
                          <h3>MRP: {curElm.Price}</h3>
                          <button>Add To Cart</button>
                      </div>
                  </div>
              )
          })
        }

      </div>
    </div> : null
    }
      <div className='home_page'>
        <div className='container'>
          <div className='sales'>
            <h1>All Latest products at the 50% off</h1>
            <Link to={'/items'} className='link'>Check Now </Link>
          </div>
          <div className='sales_image'>
          <img src='./images/sales-removebg-color.png' alt='sales1' className='lap'></img>
          <img src='./images/Mobile.png' alt='sales2'></img>
          
          </div>
        </div>
      </div>
      <div className='best_selling'>
        <h2>Best Selling</h2>
        <div className='container'>
        <div className='disp'>
          <div className='img_disp'>
            <img src='./images/mobilecat-removebg-preview.png' alt='mobile'></img>
          </div>
          <div className='name'>
            <p> Mobiles </p>
          </div>
        </div>
        <div className='disp'>
          <div className='img_disp'>
            <img src='./images/smart_watch-removebg.png' alt='smart_watch'></img>
          </div>
          <div className='name'>
            <p>Smart Watch</p>
          </div>
        </div>
        <div className='disp'>
          <div className='img_disp'>
            <img src='./images/airpods-removebg-preview.png' alt='airpod'></img>
          </div>
          <div className='name'>
            <p>Wireless Earphones</p>
          </div>
        </div>
        <div className='disp'>
          <div className='img_disp'>
            <img src='./images/bags-removebg.png' alt='bags'></img>
          </div>
          <div className='name'>
            <p>Bags</p>
          </div>
        </div>
      </div>
    </div>
    <div className='sample_items'>
      <h2>Latest Products</h2>
      <div className='container'>
        {
          props.prod.map((items)=>
          {
            return(
              <div className='box' key={items.id}>
                <div className='pic'>
                  <img src={items.Img} alt={items.Desc}></img>
                <div className='buttons'>
                  <li onClick={()=>{props.addToCart(items)}}><AiOutlineShoppingCart/></li>
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
          })
        }
      </div>
    </div>
    </>
  )
}

export default Home