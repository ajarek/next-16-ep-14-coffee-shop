'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"
import coffee from "../../data/coffee.json"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

const CoffeeList = () => {
  const [search, setSearch] = useState("")
  return (
    <div className='w-full h-[852px] flex flex-col  items-center justify-start  font-sans '>
      <div className='w-full h-32 flex flex-col items-center justify-center gap-5 bg-foreground px-4 pt-8 '>
        <div className='w-full flex items-center gap-2'>
          <div className='w-full relative'>
            <Input type="search" className='bg-white pl-10' placeholder='Search coffee' value={search} onChange={(e) => setSearch(e.target.value)} />
            <span className='absolute left-2 top-2'>
              <Search className='text-foreground' />
            </span>
          </div>
        </div>
      </div>
      <div className='w-full h-[calc(852px-128px-64px)] grid grid-cols-2  gap-4 overflow-auto p-2 justify-items-center overflow-y-auto  scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-primary'>
        {coffee.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
          <Card
            key={item.id}
            className='flex flex-col items-start justify-start gap-2 max-h-66 '
          >
            <Image
              src={item.image}
              alt={item.name}
              width={150}
              height={150}
              className='rounded-sm mask-t-from-50% mask-b-from-50% '
            />
            <p className='text-sm font-semibold px-2'>{item.name}</p>
            <div className='flex items-center justify-between w-full px-2'>
              <p className='text-lg font-semibold px-2'>$ {item.price}</p>
              <Button asChild>
                <Link href={`/coffee/${item.id}`}>
                  <Plus />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CoffeeList
