export interface Coffee {
  id: string
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

export interface CoffeeProps {
  coffee: Coffee
}
