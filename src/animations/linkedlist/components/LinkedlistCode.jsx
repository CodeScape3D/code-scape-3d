import { useEffect, useRef, useState } from 'react'
import { SvgIconDropdown, svgAlgo } from '../../../assets/svg/SvgConstans';

export const LinkedlistCode = () => {

  const codeRef = useRef(null);
  const [prevCurrentLine, setPrevCurrentLine] = useState(null);
  const [infoVisible, setInfoVisible] = useState(false);



  const Code = (funAction) => {
    return (<code>Code</code>)
  }


  const toggleInfoPanel = () => {
    setInfoVisible(!infoVisible);
  }

  return (
    <div className='w-full md:w-80 mx-auto md:mr-4 md:mb-4'>
      <div className="relative">
        {/* Panel de información */}
        {infoVisible && (
          <div className="bg-gray-900 text-white p-4 rounded absolute bottom-14 w-full md:w-80" style={{ zIndex: "100" }}>
            <ul className="list-disc list-inside text-sm">
            </ul>
          </div>
        )}

        {/* Div header */}
        <div className="bg-gray-900 text-white font-bold py-2 px-4 flex justify-between items-center rounded-t">
          <div className="flex items-center">
            {svgAlgo}
            <span className="ml-2">Algoritmo</span>
          </div>
          <div className="flex items-center">
            <span
              className="inline-flex items-center ml-2 px-3 py-1 bg-primary text-white rounded-lg cursor-pointer hover:bg-secondary transition"
              onClick={toggleInfoPanel}>
              Explicacion
              <SvgIconDropdown isOpen={infoVisible} className="ml-1" />
            </span>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white text-xs p-2 transition-all">
        {Code("funAction")}
      </div>
    </div>
  )
}
