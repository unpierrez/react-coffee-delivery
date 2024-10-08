import { coffeData } from '../../data/Coffees/Coffees.data'
import { useState } from 'react'

const useCoffeCatalog = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const handleTagSelect = (tag: string | null) => {
    setSelectedTag(tag)
  }

  const filteredCoffees = selectedTag
    ? coffeData.filter((coffee) => coffee.tags.includes(selectedTag))
    : coffeData

  const uniqueTags = Array.from(
    new Set(coffeData.flatMap((coffee) => coffee.tags)),
  )
  return { handleTagSelect, filteredCoffees, uniqueTags, selectedTag }
}

export default useCoffeCatalog
