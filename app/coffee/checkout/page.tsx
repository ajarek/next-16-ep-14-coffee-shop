import { SignedIn, UserButton } from "@clerk/nextjs"
import PhoneIndicators from "@/components/PhoneIndicators"

const Checkout = () => {
  return (
    <div className='w-full h-[852px] flex flex-col items-center justify-start '>
      <PhoneIndicators />
      <div className='w-full h-24 flex  items-center justify-center pt-10 bg-foreground px-4'>
        <h1 className='w-full text-4xl text-center font-semibold text-white  '>
          Checkout
        </h1>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default Checkout
