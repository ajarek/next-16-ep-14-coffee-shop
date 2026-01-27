import Footer from "@/components/Footer"
import PhoneIndicators from "@/components/PhoneIndicators"
import { Toaster } from "sonner"
export default function CoffeeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=' relative h-[852px] w-[393px] mx-auto my-10 border-6 border-stone-400 rounded-3xl shadow-2xl shadow-stone-400 container flex flex-col items-center justify-between bg-transparent z-0 overflow-hidden'>
      <PhoneIndicators />
      {children}
      <Toaster />
      <Footer/>   
    </div>
  )
}
