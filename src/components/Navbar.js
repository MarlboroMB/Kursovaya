import { useState } from 'react';
import { AppBar, Box, Toolbar, Button, Typography, Modal, TextField } from '@mui/material';
import { TemporaryDrawer } from './Drawer';
import { useNavigate } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  border: '1px solid gray',
  borderRadius: 5,
  backgroundColor: 'white',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 1,
};

export const Navbar = () => {
  const navigate = useNavigate();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isRegistrationOpened, setIsRegistrationOpened] = useState(false);

  const handleRegistrationModalOpen = () => {
    setIsModalOpened(false);
    setIsRegistrationOpened(!isRegistrationOpened);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ background: '#212121' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TemporaryDrawer />
            <Button
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => navigate('/')}
            >
              <img src="./logo.png" style={{ height: 75, width: 75 }} alt="logo" />
              <Typography style={{ color: '#C4C4C4', fontSize: 35 }}>Alt</Typography>
              <Typography style={{ color: '#5F5F5F', fontSize: 35 }}>Air</Typography>
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              endIcon={<ShoppingCartIcon />}
              onClick={() => navigate('/categories')}
              sx={{ backgroundColor: '#5F5F5F', marginRight: 2 }}
            >
              Корзина
            </Button>
            <Button
              variant="contained"
              endIcon={<AppsIcon />}
              onClick={() => navigate('/categories')}
              sx={{ backgroundColor: '#5F5F5F', marginRight: 2 }}
            >
              Категории
            </Button>
            <Button
              variant="contained"
              endIcon={<LoginIcon />}
              onClick={() => {
                setIsModalOpened(!isModalOpened);
              }}
              sx={{ backgroundColor: '#5F5F5F' }}
            >
              Войти
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Modal
        open={isModalOpened}
        onClose={() => {
          setIsModalOpened(!isModalOpened);
        }}
      >
        <Box sx={style}>
          <TextField required id="login" label="Login" placeholder="Логин" variant="filled" />
          <TextField
            required
            id="password"
            label="Password"
            placeholder="Пароль"
            variant="filled"
          />
          <Button variant="contained" sx={{ backgroundColor: '#000000' }}>
            Войти
          </Button>
          <p>или</p>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#000000' }}
            onClick={handleRegistrationModalOpen}
          >
            Зарегистрироваться
          </Button>
        </Box>
      </Modal>
      <Modal
        open={isRegistrationOpened}
        onClose={() => {
          setIsModalOpened(false);
          setIsRegistrationOpened(!isRegistrationOpened);
        }}
      >
        <Box sx={style}>
          <TextField required id="login" label="email" placeholder="email" variant="filled" />
          <TextField required id="password" label="Пароль" placeholder="Пароль" variant="filled" />
          <TextField
            required
            id="password"
            label="Повторите пароль"
            placeholder="Повторите пароль"
            variant="filled"
          />
          <Button variant="contained" sx={{ backgroundColor: '#000000' }}>
            Зарегистрироваться
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};
