import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faXTwitter} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'




function Footer() {
  return (
    <div className='min-h-80 bg-violet-900 p-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] text-white'>

    <div>
        <h4 className='text-3xl'><FontAwesomeIcon icon={faCartShopping} />E-CART</h4>
         

    <p className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores nobis fugiat, nostrum odio veniam eius. Inventore alias quisquam ducimus molestias cumque atque explicabo consectetur, perferendis earum, quas vero quasi repudiandae.</p>
    </div>
    <div className='flex justify-center'>
        <div >
            <h3 className='text-3xl'>LINKS</h3>
            <Link  to={'/'}><p className='mt-4'>Home</p></Link>
            <Link to={'/wishlist'}> <p className='mt-3'>Wishlist</p></Link>
            <Link to={'/cart'}><p className='mt-3'>Cart</p></Link>
        </div>
    </div>

    <div className='flex justify-center'>
        <div >
            <h3 className='text-3xl'>GUIDES</h3>
            <p className='mt-4'>React</p>
            <p className='mt-3'>React Bootstrap</p>
            <p className='mt-3'>Bootswatch</p>
        </div>
    </div>

    <div>
        <h1 className='text-3xl'>CONTACT US</h1>
        <div className='flex mt-4'>
            <input type="text"  placeholder='Email' className='w-1/2 p-2 rounded'/>
            <button className='py-2 px-3 bg-orange-600 ms-4 rounded'>Subscribe</button>
        </div>
        <div className='flex justify-between mt-4'>
        <FontAwesomeIcon icon={faXTwitter} className='text-3xl'/>
        <FontAwesomeIcon icon={faLinkedin} className='text-3xl'/>
        <FontAwesomeIcon icon={faFacebook} className='text-3xl'/>
        <FontAwesomeIcon icon={faInstagram} className='text-3xl'/>
        </div>
    </div>
    </div>
  )
}

export default Footer