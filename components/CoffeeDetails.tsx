"use client"

import { ChevronLeft, Handbag, Minus, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import coffee from "@/data/coffee.json"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useCartStore } from "@/store/cartStore"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const CoffeeDetailsClient = ({ id }: { id: string }) => {
  const router = useRouter()
  const detailCoffee = coffee.find((item) => item.id === +id)
  const [count, setCount] = useState(1)
  const [size, setSize] = useState("S")
  const { addItemToCart, items } = useCartStore()
  const cartCount = items.reduce(
    (total, item) => total + (item.quantity ?? 1),
    0,
  )

  if (!detailCoffee) {
    return <div>Coffee not found</div>
  }

  const handleAddToCart = () => {
    if (items.some((i) => i.id === detailCoffee.id)) {
      toast("Product is already in the cart")
      router.push("/coffee")
      return
    }
    addItemToCart({
      id: detailCoffee.id,
      name: detailCoffee.name,
      description: detailCoffee.description,
      price: detailCoffee.price,
      image: detailCoffee.image,
      quantity: count,
      size,
    })
    toast.success("Item added to cart")
    setTimeout(() => {
      router.push("/coffee")
    }, 1000)
  }

  return (
    <div className='w-full h-[852px] flex flex-col items-center justify-start font-sans'>
      <div className='w-full h-24 flex items-center justify-between gap-5 bg-foreground px-4 text-white'>
        <Link href='/coffee'>
          <ChevronLeft size={30} className='' />
        </Link>
        <h1 className='text-xl font-bold'>Coffee Details</h1>
        <Link href='/coffee/cart' className='relative text-secondary'>
          <Handbag size={30} color='white' />
          <span className='absolute bottom-5 left-4 w-6 h-6 flex items-center justify-center bg-primary rounded-full text-white hover:text-primary transition-colors'>
            {cartCount}
          </span>
        </Link>
      </div>
      <div className='w-full h-[calc(852px-96px-64px)]'>
        <div className='w-full flex items-center justify-center'>
          <Image
            src={detailCoffee.image}
            alt={detailCoffee.name}
            width={380}
            height={380}
            className='rounded-sm mask-t-from-50% mask-b-from-90%'
          />
        </div>
        <div className='flex items-center justify-center gap-4 mt-4'>
          {["S", "M", "L"].map((s) => (
            <Button
              key={s}
              variant='outline'
              className={cn(
                "w-20 border-2 border-primary focus:bg-primary focus:text-white hover:bg-primary hover:text-white transition-colors cursor-pointer",
                size === s && "bg-primary text-white",
                s === "S" && "w-24", // Keep original width logic
              )}
              onClick={() => setSize(s)}
            >
              {s}
            </Button>
          ))}
        </div>
        <div className='flex flex-col items-start justify-start gap-4 p-4'>
          <h1 className='text-2xl font-bold'>{detailCoffee.name}</h1>
          <p className='text-lg'>{detailCoffee.description}</p>
          <div className='flex items-center justify-center gap-3'>
            <Button
              onClick={() => setCount(Math.max(1, count - 1))}
              className='cursor-pointer'
            >
              <Minus />
            </Button>
            <p>{count}</p>
            <Button
              onClick={() => setCount(count + 1)}
              className='cursor-pointer'
            >
              <Plus />
            </Button>
          </div>
          <div className='flex items-center justify-between w-full'>
            <p className='text-2xl font-bold'>
              $ {(detailCoffee.price * count).toFixed(2)}
            </p>
            <Button onClick={handleAddToCart}>Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeDetailsClient
