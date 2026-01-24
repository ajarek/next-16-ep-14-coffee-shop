import { BatteryFull, Signal, Wifi } from "lucide-react"

export default function Home() {
  return (
    <div className='w-full min-h-screen flex flex-col  items-center justify-start  font-sans dark:bg-black p-4'>
      <div className=' relative h-[852px] w-[393px] border-4 border-stone-400 rounded-3xl shadow-2xl shadow-stone-400 container flex flex-col items-center justify-start p-4 bg-[url(/images/hero.jpg)] bg-center bg-cover bg-no-repeat z-0'>
        <div className='absolute top-0 left-0 z-50 flex w-full items-center justify-between px-6 pt-5'>
          <span className="text-white">9:41</span>
          <div className='flex items-center justify-between gap-2'>
            <Signal className="text-white" />
            <Wifi className="text-white" />
            <BatteryFull className="text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}
