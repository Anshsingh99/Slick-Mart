import React,{useState} from 'react'
import './App.css';
import Navigate from './Components/Navigate';
import {  BrowserRouter  } from "react-router-dom";
import Pages from './Components/Pages';
import Footer from './Components/Footer';
import Sample_items from './Components/Sample_items';
import { useEffect } from 'react';
import axios from 'axios';
const App = () => {
  const [cart,setCart]=useState([]);
  const [details,setDetails]=useState([]);
  const [prod, setProd] = useState([]);
  const [cat,setCat]=useState([]);
  const [search,setSearch]=useState("");
  const [close,setClose]=useState(false);
  const searchProduct=(search)=>
  {
    const update=Sample_items.filter((item)=>{
      return item.cat === search
    })
    setCat(update)
  }
  useEffect(()=>{
    axios.get("https://notlegit991.pythonanywhere.com/slickmart/products/get", {
    }).then(res=>{
      let temp = [...prod]
      // res.data.forEach(data => {
      //   let fields = data['fields']
      //   temp.push({
      //     id:data['pk'],
      //     Desc: fields['description'],
      //     Name: fields['name'],
      //     Price: fields['price'],
      //     cat: fields['category'],
      //     Img: fields['img_url']
      //   })
      // });
      res.data.map((data)=>{
        let fields = data['fields']
        temp.push({
          id:data['pk'],
          Desc: fields['description'],
          Name: fields['name'],
          Price: fields['price'],
          cat: fields['category'],
          Img: fields['img_url']
        })
        return null
      });
      setProd(temp);
      setCat(temp);
    }
    ); 
  }, [prod]);
  const view = (product) => 
  {
    setDetails([{...product}]);
    setClose(true)
  }
  const addToCart=(item)=>{
    const exist = cart.find((x)=>{
      return x.id === item.id
  })
    if(exist){
      alert("This Product is already in the cart");
    }
    else{
      setCart([...cart,{...item,qty:1}]);
      alert("Product is added to cart")
    }
  }
  return (
    <div>
      <BrowserRouter>
      <Navigate searchProduct={searchProduct} search={search} setSearch={setSearch} />
      <Pages cat={cat} prod = {prod} setCat={setCat}  details={details} search={search} view={view} close={close} setClose={setClose}
             cart={cart} setCart={setCart} addToCart={addToCart} />
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App