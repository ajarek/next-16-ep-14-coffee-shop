import CoffeeDetailsClient from "@/components/CoffeeDetails"
import coffee from "@/data/coffee.json"
import { Metadata } from "next"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const coffeeItem = coffee.find((c) => c.id === +id)

  if (!coffeeItem) {
    return {
      title: "Coffee Not Found",
    }
  }

  return {
    title: `${coffeeItem.name} - Coffee Shop`,
    description: coffeeItem.description,
  }
}

export default async function CoffeeDetailsPage({ params }: Props) {
  const { id } = await params
  return <CoffeeDetailsClient id={id} />
}
