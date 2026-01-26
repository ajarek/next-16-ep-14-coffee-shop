import { BatteryFull, Signal, Wifi } from "lucide-react"

const PhoneIndicators = () => {
  return (
    <div className='absolute top-0 left-0 z-50 h-8 flex w-full items-center justify-between px-6 pt-5 bg-transparent'>
      <span className='text-white'>9:41</span>
      <div className='flex items-center justify-between gap-2'>
        <Signal className='text-white' />
        <Wifi className='text-white' />
        <BatteryFull className='text-white' />
      </div>
    </div>
  )
}

export default PhoneIndicators
