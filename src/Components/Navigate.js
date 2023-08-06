import React from 'react'
import { HiShoppingBag } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { BiLogIn } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import './nav.css'
const Navigate = (props) => {
    const { loginWithRedirect,logout,user,isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    
  return (
    <>
    <div className='free'>
        <div className='logo'>
            <p> Slickmart   </p>
            <div className='icon'>
            <HiShoppingBag/>
            </div>
        
        <div className='main_header'>
            <div className='container'>
                <div className='search_box'>
                    <input type='text'  placeholder='Search'  value={props.search} autoComplete='off' onChange={e=>{props.setSearch(e.target.value)}} ></input>
                    <button onClick={()=>{navigate("/items")}}>Search</button>
                </div>
                <div className='icon'>
                    {
                        isAuthenticated &&
                        (<div className='account'>  
                        <div className='user_icon'>
                        <AiOutlineUser />
                        </div>
                        <p>Hi,{user.name}</p>
                        </div> )
                            
                    }
                    <div className='second_icon'>
                    <Link to="/" className='link'><AiOutlineHeart /></Link>
                    <Link to="/cart" className='link'><FaShoppingCart /></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div className='bttm_nav' >
        <div className='bttm_nav2'>
            <div className='nav'>
                <ul>
                    <li>
                        <Link to='/' className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to='/items'className='link'>Product</Link>
                    </li>
                    <li>
                        <Link to='/Contact'className='link'>Contact Us</Link>
                    </li>
                </ul>
                </div>
                <div className='log'>
                    {
                        isAuthenticated ?
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><BiLogOut/></button>
                        :
                        <button onClick={() => loginWithRedirect()}><BiLogIn/></button>
                    }
                                     
            </div>
        </div>
    </div>

  
    </>
  )
}

export default Navigate