import React from 'react';
import Logo from '../assets/logo.png';

const HeaderHomeAprende = () => {
  return (
    <>
      <div className="flex gap-4 justify-center items-center">
        <h2 className="self-center text-4xl font-bold">CodeScape3D</h2>
        <svg
          width="70.67"
          height="64.78"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 70.67 64.78"
        >
          <image
            xlinkHref={Logo}
            width="70.67"
            height="64.78"
          />
        </svg>
      </div>
      <p className="mt-1 text-lg text-center">Aprende Programación de forma interactiva</p>
    </>
  );
};

export default HeaderHomeAprende;
