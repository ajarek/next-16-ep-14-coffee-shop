import {  Bell, Handbag, Heart, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-16 flex items-center justify-center gap-8'>
       <Link href="/" className='text-secondary hover:text-primary transition-colors'> <Home size={30}/> </Link>
       <Link href="/coffee" className='text-secondary hover:text-primary transition-colors'> <Heart size={30}/> </Link>
       <Link href="/cart" className='text-secondary hover:text-primary transition-colors'> <Handbag size={30}/> </Link>
       <Link href="/" className='text-secondary hover:text-primary transition-colors'> <Bell size={30}/> </Link>
    </div>
  )
}

export default Footer