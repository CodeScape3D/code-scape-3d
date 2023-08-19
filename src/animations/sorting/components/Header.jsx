import React from 'react'

export const Header = ({ titulo }) => {
  return (
    <div className="bg-gray-900 text-center py-2 px-20 rounded-3xl mb-3">
      <h2 className="text-white font-bold">
        {titulo}
      </h2>
    </div>
  )
}
