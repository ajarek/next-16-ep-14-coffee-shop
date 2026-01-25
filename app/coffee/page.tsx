import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GamepadDirectional, Search } from "lucide-react"

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
      </div>
    </div>
  )
}

export default CoffeeList
