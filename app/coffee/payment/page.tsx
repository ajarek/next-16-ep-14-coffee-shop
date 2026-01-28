import PhoneIndicators from '@/components/PhoneIndicators'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Payment = () => {
  return (
    <div className='w-full h-[852px] flex flex-col items-center justify-start '>
      <PhoneIndicators />
      <div className='w-full h-24 flex  items-center justify-center pt-10 bg-foreground px-4'>
        <h1 className='w-full text-4xl text-center font-semibold text-white  '>
          Payment
        </h1>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className="p-4">
       
      </div>
    </div>
  )
}

export default Payment