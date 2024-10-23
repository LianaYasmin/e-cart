import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



function Header() {
    const wishlistArray= useSelector((state)=>state.wishlist)
    console.log(wishlistArray);

    const cartArray= useSelector((state)=>state.cartItem)
  console.log(cartArray);
    

    const[show,setShow]=useState(false)
    const change=()=>{
        setShow(!show)  
    }
  return (
    <>
    <div className='w-full  min-h-16 bg-violet-900 text-white p-5 md:flex items-center pt-4 md:pt-4 fixed'>
       <div className='flex w-full px-5'>
       <Link to={'/'}><h5 className='text-2xl'><FontAwesomeIcon icon={faCartShopping} />E-CART</h5></Link>
       <button onClick={change} className='border border-white rounded p-2 ms-auto md:hidden'><FontAwesomeIcon icon={faBars} /></button>


      
       </div>   
       { show && <div className='flex ms-auto md:hidden'>
       <Link to={'/wishlist'}> <button className='flex items-center border border-white rounded p-2 hover:bg-white hover:text-violet-900 me-4'><FontAwesomeIcon icon={faHeart} className='me-2 ' style={{color:'red'}}/>Wishlist <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{wishlistArray?.length}</span></button></Link>

       <Link to={'/cart'}> <button className='flex items-center border border-white rounded p-2 hover:bg-white hover:text-violet-900 me-4'><FontAwesomeIcon icon={faCartShopping} style={{color:'green'}}/>Cart <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{cartArray?.length}</span></button></Link>
       </div>
}
       <div className='md:flex ms-auto hidden'>
        <Link to={'/wishlist'}><button className='flex items-center border border-white rounded p-2 hover:bg-white hover:text-violet-900 me-4'><FontAwesomeIcon icon={faHeart} className='me-2 ' style={{color:'red'}}/>Wishlist <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{wishlistArray?.length}</span></button></Link>

       <Link to={'/cart'}> <button className='flex items-center border border-white rounded p-2 hover:bg-white hover:text-violet-900 me-4'><FontAwesomeIcon icon={faCartShopping} style={{color:'green'}}/>Cart <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{cartArray?.length}</span></button></Link>
       </div>
    </div>
    </>
  )
}

export default Header