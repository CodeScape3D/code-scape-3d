import React from 'react'

export const SortCode = () => {

  const code = `
  Para i de 0 a longitud(lista) - 1:
    Para j de 0 a longitud(lista) - i - 1:
      Si lista[j] > lista[j+1] entonces
      Fin Si
    Fin Para
  Fin Para
      `;

  return (
    <div className='w-full md:w-80 mx-auto md:mr-4 md:mb-4'>
      <div className="bg-secondary text-white py-1 px-2">
        Comienza el ordenamiento
      </div>
      <pre className="bg-primary text-white text-xs p-2">
        {code}
      </pre>
    </div>
  )
}
