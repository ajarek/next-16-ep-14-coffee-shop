import Footer from "@/components/Footer"
import { Toaster } from "sonner"
import { ClerkProvider } from "@clerk/nextjs"

export default function CoffeeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <div className=' relative h-[852px] w-full max-w-[440px] mx-auto border container flex flex-col items-center justify-between bg-transparent z-0 overflow-hidden'>
        {children}
        <Toaster />
        <Footer />
      </div>
    </ClerkProvider>
  )
}
