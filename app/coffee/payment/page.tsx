"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, CreditCard, Wallet } from "lucide-react"
import Link from "next/link"
import { useCartStore } from "@/store/cartStore"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { motion } from "framer-motion"
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs"
import ButtonCleanCart from "@/components/ButtonCleanCart"

export default function PaymentPage() {
  const router = useRouter()
  const { total, removeAllFromCart } = useCartStore()
  const totalAmount = total()

  const { user } = useUser()
  const [paymentMethod, setPaymentMethod] = useState<"card" | "wallet">("card")
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = () => {
    setIsLoading(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      removeAllFromCart()
      toast.success("Payment Successful! Your coffee is on the way.")
      router.push("/coffee")
    }, 2000)
  }

  return (
    <div className='w-full h-[852px] flex flex-col items-center justify-start font-sans bg-[#F9F9F9]'>
      {/* Header */}
      <div className='w-full h-24 flex items-center justify-between gap-5 bg-foreground px-4 text-white'>
        <Link href='/coffee/cart'>
          <ChevronLeft size={30} />
        </Link>
        <h1 className='text-xl font-bold'>Payment</h1>
        <SignedOut>
          <ButtonCleanCart />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <div className='w-[30px]' /> {/* Spacer for alignment */}
      </div>

      <div className='w-full flex-1 overflow-y-auto p-6 flex flex-col gap-6'>
        {/* Credit Card Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className='w-full h-48 rounded-2xl bg-linear-to-br from-[#C67C4E] to-[#B06030] p-6 text-white shadow-xl relative overflow-hidden'
        >
          {/* Decor circles */}
          <div className='absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl'></div>
          <div className='absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-2xl'></div>

          <div className='flex flex-col justify-between h-full relative z-10'>
            <div className='flex justify-between items-start'>
              <CreditCard className='w-8 h-8 opacity-80' />
              <span className='font-bold text-lg italic tracking-wider'>
                VISA
              </span>
            </div>
            <div className='space-y-4'>
              <div className='flex gap-4 text-xl tracking-widest font-mono select-none'>
                <span>••••</span>
                <span>••••</span>
                <span>••••</span>
                <span>4242</span>
              </div>
              <div className='flex justify-between text-xs uppercase opacity-80'>
                <div className='flex flex-col'>
                  <span>Card Holder</span>
                  <span className='font-semibold text-sm normal-case'>
                    {user?.firstName} {user?.lastName}
                  </span>
                </div>
                <div className='flex flex-col items-end'>
                  <span>Expires</span>
                  <span className='font-semibold text-sm'>12/28</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Payment Method Selector */}
        <div className='bg-white p-2 rounded-xl flex items-center justify-between shadow-sm'>
          <button
            onClick={() => setPaymentMethod("card")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-all ${
              paymentMethod === "card"
                ? "bg-primary text-white shadow-md"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <CreditCard size={18} />
            Credit Card
          </button>
          <button
            onClick={() => setPaymentMethod("wallet")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-all ${
              paymentMethod === "wallet"
                ? "bg-primary text-white shadow-md"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Wallet size={18} />
            Wallet
          </button>
        </div>

        {/* Payment Form */}
        <div className='space-y-4'>
          <h3 className='text-lg font-bold text-gray-800'>Payment Details</h3>
          <div className='space-y-3'>
            <Input
              placeholder='Card Number'
              className='bg-white border-gray-200 h-12 rounded-xl focus:border-primary focus:ring-primary/20 transition-all font-mono'
              defaultValue={"4242 4242 4242 4242"}
            />
            <div className='flex gap-3'>
              <Input
                placeholder='MM/YY'
                className='bg-white border-gray-200 h-12 rounded-xl focus:border-primary focus:ring-primary/20 transition-all font-mono'
                defaultValue={"12/28"}
              />
              <Input
                placeholder='CVC'
                type='password'
                className='bg-white border-gray-200 h-12 rounded-xl focus:border-primary focus:ring-primary/20 transition-all font-mono'
                defaultValue={"123"}
              />
            </div>
          </div>
        </div>

        {/* Total Price Section */}
        <div className='mt-auto pt-6 border-t border-dashed border-gray-200'>
          <div className='flex justify-between items-center mb-6'>
            <span className='text-gray-500 font-medium'>Total Amount</span>
            <span
              className='text-2xl font-bold text-gray-900'
              suppressHydrationWarning
            >
              ${totalAmount.toFixed(2)}
            </span>
          </div>

          <Button
            className='w-full h-14 text-lg font-bold rounded-2xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-[0.98]'
            size='lg'
            onClick={handlePayment}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Pay Now"}
          </Button>
        </div>
      </div>
    </div>
  )
}
