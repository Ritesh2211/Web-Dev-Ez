import React, { useState } from 'react';
import { Modal, Box, Typography, Button, TextField, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ open, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    
    // Basic password strength validation
    if (value.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else if (!/[A-Z]/.test(value)) {
      setPasswordError('Password must contain at least one uppercase letter.');
    } else if (!/[a-z]/.test(value)) {
      setPasswordError('Password must contain at least one lowercase letter.');
    } else if (!/[0-9]/.test(value)) {
      setPasswordError('Password must contain at least one number.');
    } else {
      setPasswordError('');
    }
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="register-modal-title">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="register-modal-title" variant="h6" component="h2">
          Register Now
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={handlePasswordChange}
          error={!!passwordError}
          helperText={passwordError}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={handleClickShowPassword}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </Box>
    </Modal>
  );
};

export default RegisterModal;
