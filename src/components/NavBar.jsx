import { useState } from 'react';
import { NavTabs, NavTab } from './';
import Logo from '../assets/logo.png';
import { MobileMenu } from './MobileMenu';
import { useNavigate } from 'react-router-dom';
import { svgMenu } from '../assets/svg/SvgConstans';
import { useTranslation } from 'react-i18next';
import { CircularProgress } from '@mui/material';
import useAuth from '../hooks/useAuth';
import LoginButton from './Auth/LoginButton';
import UserProfile from './Auth/UserProfile';

export const NavBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false);

  const showHamburgerMenu = () => {
    setIsHamburgerMenuVisible(true);
  };

  const hideHamburgerMenu = () => {
    setIsHamburgerMenuVisible(false);
  };

  return (
    <>
      <nav className="w-full bg-primary flex items-center justify-end md:justify-between px-3">
        <svg
          width="38"
          height="38"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38 38"
          className="hidden md:block cursor-pointer"
          onClick={() => navigate('/')}
        >
          <image xlinkHref={Logo} width="38" height="38" />
        </svg>

        <NavTabs>
          <NavTab text={t('learn')} linkTo="/" />
          <NavTab text="Quizzes" linkTo="/quizzes" />
          <NavTab text={t('minigames')} linkTo="/mini-juegos" />
        </NavTabs>

        {/* Auth area — desktop */}
        <div className="hidden md:flex items-center gap-2 py-1">
          {loading ? (
            <CircularProgress size={22} sx={{ color: '#ffffff' }} />
          ) : user ? (
            <UserProfile user={user} />
          ) : (
            <LoginButton />
          )}
        </div>

        <button className="block md:hidden p-1" onClick={showHamburgerMenu}>
          {svgMenu}
        </button>
      </nav>

      <MobileMenu
        isHamburgerMenuVisible={isHamburgerMenuVisible}
        hideHamburgerMenu={hideHamburgerMenu}
      />
    </>
  );
};
