"use client"

import { ChevronLeft, Heart, Minus, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import coffee from "@/data/coffee.json"
import { Button } from "@/components/ui/button"
import { use } from "react"

const CoffeeDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params)
  const detailCoffee = coffee.find((item) => item.id === +id)
  return (
    <div className='w-full min-h-screen flex flex-col  items-center justify-start  font-sans '>
      <div className='w-full min-h-16 flex items-center justify-between px-4 pt-16 py-2 bg-foreground text-white'>
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
      <div>
        <Image
          src={detailCoffee?.image || ""}
          alt={detailCoffee?.name || ""}
          width={400}
          height={400}
          className='rounded-sm mask-t-from-50% mask-b-from-90%'
        />
      </div>
      <div className='flex items-center justify-center gap-4 mt-4'>
        <Button variant="outline" className="w-24 border-2 border-primary focus:bg-primary focus:text-white hover:bg-primary hover:text-white transition-colors cursor-pointer">
          S
        </Button>
        <Button variant="outline" className="w-20 border-2 border-primary focus:bg-primary focus:text-white hover:bg-primary hover:text-white transition-colors cursor-pointer">
          M
        </Button>
        <Button variant="outline" className="w-20 border-2 border-primary focus:bg-primary focus:text-white hover:bg-primary hover:text-white transition-colors cursor-pointer">
          L
        </Button>
      </div>
      <div className='flex flex-col items-start justify-start gap-4 p-4'>
        <h1 className='text-2xl font-bold'>{detailCoffee?.name}</h1>
        <p className='text-lg'>{detailCoffee?.description}</p>
        <div className='flex items-center justify-center gap-3'>
          <Button>
            <Minus />
          </Button>
          <p>1</p>
          <Button>
            <Plus />
          </Button>
        </div>
        <div className='flex items-center justify-between w-full'>
          <p className='text-2xl font-bold'>$ {detailCoffee?.price}</p>
          <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  )
}

export default CoffeeDetails
