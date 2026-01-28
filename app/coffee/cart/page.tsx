"use client"
import PhoneIndicators from "@/components/PhoneIndicators"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cartStore"
import { Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Cart = () => {
  const { items, decrement, increment, removeItemFromCart } = useCartStore()
  return (
    <div className='w-[393px] h-[852px]'>
      <PhoneIndicators />
      <div className='w-full h-24 flex items-center justify-between gap-5 bg-foreground pt-8 text-white'>
        <h1 className='w-full text-4xl text-center font-semibold text-white '>
          Cart
        </h1>
      </div>
      <div className='h-[calc(852px-96px-64px)] w-full flex flex-col items-start justify-start gap-2 overflow-y-scroll'>
        {items.map((item) => (
          <div
            key={item.id}
            className='w-full flex items-center justify-between p-2 border-b border-primary'
          >
            <div className='flex items-center justify-center gap-2 mr-8'>
              <Image
                src={item.image || ""}
                alt={item.name}
                width={60}
                height={60}
                className='rounded-lg'
              />
              <h2 className='w-12 text-lg  text-primary'>{item.name}</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <Button
                variant='outline'
                className='w-8 h-8 flex items-center justify-center rounded-lg border-2 border-primary'
                onClick={() => decrement(item.id)}
              >
                -
              </Button>
              <span className='w-6 h-8 flex items-center justify-center'>
                {item.quantity}
              </span>
              <Button
                variant='outline'
                className='w-8 h-8 flex items-center justify-center rounded-lg border-2 border-primary'
                onClick={() => increment(item.id)}
              >
                +
              </Button>
            </div>
            <p className='w-12 text-lg  text-primary text-center'>
              {item.size}
            </p>
            <div className='flex flex-col items-center justify-center gap-2'>
              <p className='text-xl  font-semibold text-primary'>
                ${((item.price || 0) * (item?.quantity || 0)).toFixed(2)}
              </p>
              <Button
                variant='outline'
                className='w-8 h-8 flex items-center justify-center rounded-lg hover:border-red-500 hover:text-red-500'
                onClick={() => removeItemFromCart(item.id)}
              >
                <Trash2 className='w-4 h-4 text-red-500' />
              </Button>
            </div>
          </div>
        ))}
        <div className='w-full flex items-center justify-between p-2 border-t-4 border-primary'>
          <h2 className='w-full text-xl  text-primary'>Total</h2>
          <p className='text-xl font-serif font-bold text-primary'>
            $
            {items
              .reduce(
                (total, item) =>
                  total + (item.price || 0) * (item?.quantity || 0),
                0,
              )
              .toFixed(2)}
          </p>
        </div>
        <Button
          asChild
          className='w-[92%] h-12 flex items-center justify-center bg-primary text-white rounded-lg cursor-pointer mx-auto text-lg font-semibold'
        >
          <Link href='/coffee/checkout'>Checkout</Link>
        </Button>
      </div>
    </div>
  )
}

export default Cart
