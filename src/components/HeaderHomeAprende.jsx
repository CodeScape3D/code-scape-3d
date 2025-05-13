import React from 'react';
import Logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';
import { defaultLanguage } from '../main';

const HeaderHomeAprende = () => {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = e => {
    const { target } = e;
    localStorage.setItem('lang', target.value);
    i18n.changeLanguage(target.value);
  };

  return (
    <>
      <div className="flex gap-2 justify-center items-center">
        <h2 className="self-center text-4xl font-bold">CodeScape3D</h2>
        <span className="p-0 m-0 text-[35px]">/</span>
        <select
          className="p-0 m-0 outline-none"
          value={localStorage.getItem('lang') || defaultLanguage}
          onChange={handleLanguageChange}
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
        <svg
          width="70.67"
          height="64.78"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 70.67 64.78"
        >
          <image xlinkHref={Logo} width="70.67" height="64.78" />
        </svg>
      </div>
      <p className="mt-1 text-lg text-center">{t('eslogan')}</p>
    </>
  );
};

export default HeaderHomeAprende;
