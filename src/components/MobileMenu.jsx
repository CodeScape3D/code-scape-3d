import PropTypes from 'prop-types';
import { svgClose } from '../assets/svg/SvgConstans';
import { NavTab } from './NavTab';
import { useTranslation } from 'react-i18next';
import { Box, CircularProgress } from '@mui/material';
import useAuth from '../hooks/useAuth';
import LoginButton from './Auth/LoginButton';
import UserProfile from './Auth/UserProfile';

export const MobileMenu = ({ isHamburgerMenuVisible, hideHamburgerMenu }) => {
  const { t } = useTranslation();
  const { user, loading } = useAuth();

  return (
    <div
      className={`absolute top-0 left-0 ${isHamburgerMenuVisible ? 'flex' : 'hidden'} flex-col items-center justify-center md:hidden bg-primary text-white opacity-95 w-screen h-screen z-50 animate__animated animate__slideInRight`}
    >
      <NavTab text={t('learn')} linkTo="/" onClick={hideHamburgerMenu} />
      <NavTab text="Quizzes" linkTo="/quizzes" onClick={hideHamburgerMenu} />
      <NavTab
        text={t('minigames')}
        linkTo="/mini-juegos"
        onClick={hideHamburgerMenu}
      />

      {/* Auth area — mobile */}
      <Box sx={{ mt: 3 }}>
        {loading ? (
          <CircularProgress size={24} sx={{ color: '#ffffff' }} />
        ) : user ? (
          <UserProfile user={user} />
        ) : (
          <LoginButton />
        )}
      </Box>

      <button className="absolute top-1 right-7" onClick={hideHamburgerMenu}>
        {svgClose}
      </button>
    </div>
  );
};

MobileMenu.propTypes = {
  isHamburgerMenuVisible: PropTypes.bool.isRequired,
  hideHamburgerMenu: PropTypes.func.isRequired,
};
