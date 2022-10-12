import React from 'react'

function categories({ categories, filterItem }) {
  return (
    <>
      <div className='btn-container'>
        {categories.map((category, index) => {
          return (
            <button
              type='button'
              className='filter-btn'
              key={index}
              onClick={() => {
                filterItem(category)
              }}
            >
              {category}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default categories
