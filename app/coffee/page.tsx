import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GamepadDirectional, Plus, Search } from "lucide-react"
import coffee from "../../data/coffee.json"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const CoffeeList = () => {
  return (
    <div className='w-full min-h-screen flex flex-col  items-center justify-start  font-sans '>
      <div className='w-full min-h-64 flex flex-col items-center justify-center gap-5 bg-foreground px-4'>
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
      <div className='w-full grid grid-cols-2 gap-4 overflow-auto p-4 place-items-center'>
        {coffee.map((item) => (
          <Card
            key={item.id}
            className='flex flex-col items-start justify-start gap-2 '
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
