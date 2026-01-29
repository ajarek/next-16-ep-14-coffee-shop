import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className='w-full min-h-screen flex flex-col  items-center justify-start  font-sans dark:bg-black'>
      <div className=' relative h-[852px] w-full max-w-[440px] border container flex flex-col items-center justify-start p-4 bg-[url(/images/hero.jpg)] bg-top bg-cover bg-no-repeat z-0'>
        <div className='w-full absolute bottom-15 left-0 z-50 flex flex-col items-center justify-center gap-5'>
          <h1 className='text-white text-center text-4xl font-bold'>
            Fall in Love with Coffee in Blissful Delight!
          </h1>
          <p className='text-white text-center text-xl'>
            Welcome to our cozy coffee corner, where every cup is a delightful
            for you.
          </p>
          <Button
            asChild
            className='bg-white text-black  px-6 py-2 rounded-full hover:bg-white/80 cursor-pointer transition-all duration-300 ease-in-out'
          >
            <Link href='/coffee'>Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
