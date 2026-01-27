import Link from "next/link"
import { Button } from "@/components/ui/button"
import PhoneIndicators from "@/components/PhoneIndicators"

export default function NotFound() {
  return (
    <main className='relative h-[852px] w-[393px] mx-auto my-10 border-6 border-stone-400 rounded-3xl shadow-2xl shadow-stone-400 container flex flex-col items-center justify-center bg-secondary z-0 overflow-hidden'>
      <PhoneIndicators />
      <div className='w-full flex flex-col items-center text-center gap-6'>
        <h1 className='text-4xl font-serif text-primary mt-4'>
          Page not found!
        </h1>

        <p className='max-w-lg text-white text-lg'>
          It appears this page is unavailable or the address is incorrect. Try
          returning to the home page or verifying the URL.
        </p>

        <div className='flex gap-3'>
          <Link href='/'>
            <Button className='rounded-xl text-white cursor-pointer'>Return to the main page</Button>
          </Link>
        </div>

        <p className='text-white'>Error code: 404</p>
      </div>
    </main>
  )
}
