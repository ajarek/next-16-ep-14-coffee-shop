"use client"

import { ChevronLeft, Heart, Minus, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import coffee from "@/data/coffee.json"
import { Button } from "@/components/ui/button"
import { use } from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useCartStore } from "@/store/cartStore"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const CoffeeDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter()
  const { id } = use(params)
  const detailCoffee = coffee.find((item) => item.id === +id)
  const [count, setCount] = useState(1)
  const [size, setSize] = useState("S")
  const { addItemToCart, items } = useCartStore()
  return (
    <div className='w-full h-[852px] flex flex-col  items-center justify-start  font-sans '>
      <div className='w-full h-24 flex items-center justify-between gap-5 bg-foreground px-4 pt-8 text-white'>
        <Link href='/coffee'>
          <ChevronLeft size={30} className='' />
        </Link>
        <h1 className='text-xl font-bold'>Coffee Details</h1>
        <Link
          href='/coffee'
          className='text-white hover:text-primary transition-colors'
        >
          {" "}
          <Heart size={30} />{" "}
        </Link>
      </div>
      <div className='w-full h-[calc(852px-96px-64px)] '>
        <div className='w-full flex items-center justify-center'>
          <Image
            src={detailCoffee?.image || ""}
            alt={detailCoffee?.name || ""}
            width={380}
            height={380}
            className='rounded-sm mask-t-from-50% mask-b-from-90%'
          />
        </div>
        <div className='flex items-center justify-center gap-4 mt-4'>
          <Button
            variant='outline'
            className={cn(
              "w-24 border-2 border-primary focus:bg-primary focus:text-white hover:bg-primary hover:text-white transition-colors cursor-pointer",
              size === "S" && "bg-primary text-white",
            )}
            onClick={() => setSize("S")}
          >
            S
          </Button>
          <Button
            variant='outline'
            className={cn(
              "w-20 border-2 border-primary focus:bg-primary focus:text-white hover:bg-primary hover:text-white transition-colors cursor-pointer",
              size === "M" && "bg-primary text-white",
            )}
            onClick={() => setSize("M")}
          >
            M
          </Button>
          <Button
            variant='outline'
            className={cn(
              "w-20 border-2 border-primary focus:bg-primary focus:text-white hover:bg-primary hover:text-white transition-colors cursor-pointer",
              size === "L" && "bg-primary text-white",
            )}
            onClick={() => setSize("L")}
          >
            L
          </Button>
        </div>
        <div className='flex flex-col items-start justify-start gap-4 p-4'>
          <h1 className='text-2xl font-bold'>{detailCoffee?.name}</h1>
          <p className='text-lg'>{detailCoffee?.description}</p>
          <div className='flex items-center justify-center gap-3'>
            <Button
              onClick={() => {
                setCount(count > 1 ? count - 1 : count)
              }}
              className='cursor-pointer'
            >
              <Minus />
            </Button>
            <p>{count}</p>
            <Button
              onClick={() => {
                setCount(count + 1)
              }}
              className='cursor-pointer'
            >
              <Plus />
            </Button>
          </div>
          <div className='flex items-center justify-between w-full'>
            <p className='text-2xl font-bold'>
              $ {((detailCoffee?.price || 0) * count).toFixed(2)}
            </p>
            <Button
              onClick={() =>{
                 if (items.some((i) => i.id === detailCoffee?.id)) {
          toast("Product is already in the cart")
          router.push("/coffee")
          return
        }
                addItemToCart({
                  id: detailCoffee?.id || 0,
                  name: detailCoffee?.name || "",
                  description: detailCoffee?.description || "",
                  price: detailCoffee?.price || 0,
                  image: detailCoffee?.image || "",
                  quantity: count,
                  size,
                })
                toast.success("Item added to cart")
                setTimeout(() => {
                  router.push("/coffee")
                }, 1000)
              }
              }
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeDetails
