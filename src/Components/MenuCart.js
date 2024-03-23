import React, { useState, useEffect } from 'react';
import Quantity from './Quantity';
import { Button } from 'react-bootstrap';


function filterData(searchText, menuItems) {
  return menuItems.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()));
}

const MenuCart = () => {
  const [allproducts,setAllproducts]=useState([])
  const [filtermenuItems, setFilterMenuItems] = useState([]);
  const  [searchText,setSearchtext]=useState();

  useEffect(() => {
   // axios.get("https://fakestoreapi.com/products").then((response)=>setMenuItems(response.data));
   getItems()
   
  }, []);

  const getItems=  async ()=>{
    const data=await fetch("https://fakestoreapi.com/products");
    const json =await data.json();
    console.log(json);
     setAllproducts(json);
     setFilterMenuItems(json);
  }
 return (
    <>
    <div className='search-conatiner'>
    <input 
           type="text"
           placeholder='search.....'
           value={searchText}
           onChange={(e)=>{
            setSearchtext(e.target.value);
           }}
           className='w-44 h-9 border border-slate-950 my-2 mx-2 rounded-md'/>
           <button
            onClick={()=>{
            const data=filterData(searchText,allproducts);
            setFilterMenuItems(data)
           }}
           >search</button>
    </div>

    <div className='flex flex-wrap justify-evenly '>
       {filtermenuItems.map((item, index) => (
       <div className=' mx-5 border border-slate-950 h-80 w-60 shadow-md rounded-md m-5'>
            <img  className='h-44 w-[90%] items-center mx-2' src={item.image}/>
            <h6 className='text-center'>{item.title}</h6>
            <h5 className='mx-4'><span className='text-xl text-green-800 font-bold'>$</span>{item.price}</h5>
            <div className='flex'>
         <Quantity /> <Button className='mx-4' >add to cart</Button>
         </div>
      </div>
        
      ))}
      
    </div>
    </>
  
  );
};

export default MenuCart;
