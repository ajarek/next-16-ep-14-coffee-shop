import CoffeeList from "@/components/CoffeeList"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Coffee - Coffee Shop",
  description: "Explore our wide variety of premium coffee blends.",
}

export default function CoffeePage() {
  return <CoffeeList />
}
