"use client"
import { Bell, Coffee, Handbag, Home } from "lucide-react"
import Link from "next/link"
import { useCartStore } from "@/store/cartStore"

const Footer = () => {
  const { items } = useCartStore()
  const cartCount = items.reduce(
    (total, item) => total + (item.quantity ?? 1),
    0,
  )
  return (
    <div className='w-full h-16 flex items-center justify-center gap-8'>
      <Link
        href='/'
        className='text-secondary hover:text-primary transition-colors'
      >
        {" "}
        <Home size={30} />{" "}
      </Link>
      <Link
        href='/coffee'
        className='text-secondary hover:text-primary transition-colors'
      >
        {" "}
        <Coffee size={30} />{" "}
      </Link>
      <Link
        href='/coffee/cart'
        className='relative text-secondary hover:text-primary transition-colors '
      >
        {" "}
        <Handbag size={30} />{" "}
        <span className='absolute bottom-5 left-4 w-6 h-6 flex items-center justify-center bg-primary rounded-full text-white'>
          {cartCount}
        </span>
      </Link>
      <Link
        href='/'
        className='text-secondary hover:text-primary transition-colors'
      >
        {" "}
        <Bell size={30} />{" "}
      </Link>
    </div>
  )
}

export default Footer
