import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import BuyerForm from "@/components/BuyerForm"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import ButtonCleanCart from "@/components/ButtonCleanCart"

const Checkout = () => {
  return (
    <div className='w-full h-[852px] flex flex-col items-center justify-start '>
      <div className='w-full h-24 flex  items-center justify-center  bg-foreground px-4'>
        <Link href='/coffee/cart' className='absolute left-4'>
          <ChevronLeft size={30} className='text-white' />
        </Link>
        <h1 className='w-full text-4xl text-center font-semibold text-white  '>
          Checkout
        </h1>
        <SignedOut>
          <ButtonCleanCart />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className='p-4'>
        <BuyerForm />
      </div>
    </div>
  )
}

export default Checkout
