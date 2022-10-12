import React, { useState } from 'react'
import Categories from './Components/categories'
import Menu from './Components/menu'
import data from './data'

const allCategories = ['all', ...new Set(data.map((item) => item.category))]
console.log(allCategories)

function App() {
  const [menu, setMenu] = useState(data)
  const [categories, setCategories] = useState(allCategories)
  const filterItem = (category) => {
    if (category === 'all') {
      setMenu(data)
      return
    }
    const newItems = data.filter((item) => item.category === category)
    setMenu(newItems)
  }
  return (
    <>
      <main>
        <section className='menu section'>
          <div className='title'>
            <h2>Our Menu</h2>
            <div className='underline'></div>
            <Categories filterItem={filterItem} categories={categories} />
            <Menu items={menu} />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
