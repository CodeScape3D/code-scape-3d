// LoginButton — triggers Google sign-in popup
import { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { loginWithGoogle } from '../../services/authService';
import { saveUserData } from '../../services/firestoreService';

const LoginButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const user = await loginWithGoogle();
      await saveUserData(user);
    } catch (err) {
      // Ignore popup-closed-by-user errors silently
      if (err.code !== 'auth/popup-closed-by-user') {
        setError('No se pudo iniciar sesión. Intenta de nuevo.');
        console.error('Login error:', err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Button
        variant="contained"
        onClick={handleLogin}
        disabled={loading}
        size="small"
        sx={{
          backgroundColor: '#ffffff',
          color: '#31293B',
          fontWeight: 600,
          textTransform: 'none',
          fontSize: '0.8rem',
          px: 1.5,
          py: 0.6,
          borderRadius: 2,
          minWidth: 'auto',
          boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
          '&:disabled': {
            backgroundColor: '#cccccc',
          },
        }}
        startIcon={
          loading ? (
            <CircularProgress size={14} color="inherit" />
          ) : (
            <span style={{ fontSize: '14px' }}>🔐</span>
          )
        }
      >
        {loading ? 'Ingresando…' : 'Iniciar sesión'}
      </Button>

      {error && (
        <span
          style={{
            fontSize: '0.65rem',
            color: '#ff6b6b',
            marginTop: '4px',
            maxWidth: '120px',
            textAlign: 'center',
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default LoginButton;
