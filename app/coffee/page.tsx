import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GamepadDirectional, Search } from "lucide-react"
import coffee from "../../data/coffee.json"
import Image from "next/image"
import PhoneIndicators from "@/components/PhoneIndicators"

const CoffeeList = () => {
  return (
    <div className='w-full min-h-screen flex flex-col  items-center justify-start  font-sans p-4'>
      <div className=' relative h-[852px] w-[393px] border-6 border-stone-400 rounded-3xl shadow-2xl shadow-stone-400 container flex flex-col items-center justify-start bg-transparent z-0 overflow-hidden'>
        <div className='w-full h-64 flex flex-col items-center justify-center gap-5 bg-foreground px-4'>
          <div className='flex items-center gap-2'>
            <div className='w-full relative'>
              <Input className='bg-white pl-10' placeholder='Search coffee' />
              <span className='absolute left-2 top-2'>
                <Search className='text-foreground' />
              </span>
            </div>

            <Button>
              <GamepadDirectional />
            </Button>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 overflow-auto p-4 place-items-center">
          <PhoneIndicators/>
          {coffee.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-center gap-2 ">
              <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-sm mask-t-from-50% mask-b-from-50% " />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoffeeList
