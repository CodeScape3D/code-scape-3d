// UserProfile — displays avatar + name and a logout button
import { useState } from 'react';
import {
  Avatar,
  Box,
  Typography,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  CircularProgress,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../../services/authService';
import PropTypes from 'prop-types';

const UserProfile = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loggingOut, setLoggingOut] = useState(false);

  const open = Boolean(anchorEl);

  const handleAvatarClick = e => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await logout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setLoggingOut(false);
      handleClose();
    }
  };

  // Show only first name to save navbar space
  const firstName = user.displayName?.split(' ')[0] ?? 'Usuario';

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      <Typography
        variant="caption"
        sx={{
          color: '#ffffff',
          fontWeight: 500,
          display: { xs: 'none', md: 'block' },
        }}
      >
        {firstName}
      </Typography>

      <Tooltip title="Ver opciones">
        <IconButton onClick={handleAvatarClick} size="small" sx={{ p: 0 }}>
          <Avatar
            src={user.photoURL}
            alt={user.displayName}
            sx={{ width: 34, height: 34, border: '2px solid #ffffff' }}
          />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          sx: {
            mt: 0.5,
            minWidth: 180,
            borderRadius: 2,
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          },
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="body2" fontWeight={600}>
            {user.displayName}
          </Typography>
          <Typography variant="caption" color="text.secondary" noWrap>
            {user.email}
          </Typography>
        </Box>

        <Divider />

        <MenuItem onClick={handleLogout} disabled={loggingOut}>
          <ListItemIcon>
            {loggingOut ? (
              <CircularProgress size={16} />
            ) : (
              <LogoutIcon fontSize="small" />
            )}
          </ListItemIcon>
          <Typography variant="body2">Cerrar sesión</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
    photoURL: PropTypes.string,
  }).isRequired,
};

export default UserProfile;
