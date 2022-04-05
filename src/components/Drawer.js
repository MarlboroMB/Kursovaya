import React, { useState } from 'react';
import { IconButton, Button, Drawer, Box, Modal, Typography } from '@mui/material';
import { MenuRounded } from '@mui/icons-material';

const ButtonStyle = {
  width: 125,
  backgroundColor: 'white',
  color: 'black',
};
const modalStyle = {
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

export const TemporaryDrawer = () => {
  const [aboutUsModal, setAboutUsModal] = useState(false);
  const [contactUsModal, setContactUsModal] = useState(false);

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 150,
        backgroundColor: 'black',
        borderRight: '1px solid white',
        height: '100%',
        display: 'flex',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '95%',
          paddingTop: '5%',
          paddingLeft: 10,
        }}
      >
        <Button
          variant="contained"
          sx={ButtonStyle}
          onClick={() => {
            setAboutUsModal(true);
          }}
        >
          О нас
        </Button>
        <Button
          variant="contained"
          sx={ButtonStyle}
          onClick={() => {
            setContactUsModal(true);
          }}
        >
          Обратная связь
        </Button>
      </div>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer('left', true)}>
          <MenuRounded />
        </IconButton>
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)} sx={{}}>
          {list('left')}
        </Drawer>
        <Modal
          open={contactUsModal}
          onClose={() => {
            setContactUsModal(false);
          }}
        >
          <Box sx={modalStyle}>
            <Typography sx={{ fontSize: 20 }}>
              Поддержка. Хотите оставить отзыв или заявку для консультации? Обратитесь на горячую
              линию по номеру телефона: 8-999-999-99-99 или напишите нам на почту: ALTAIR@mail.ru Мы
              постараемся исправить все неудобства. Оставайтесь с нами!
            </Typography>
          </Box>
        </Modal>
        <Modal
          open={aboutUsModal}
          onClose={() => {
            setAboutUsModal(false);
          }}
        >
          <Box sx={modalStyle}>
            <Typography sx={{ fontSize: 20 }}>
              Информация: Интернет-магазин ALTAIR предоставляет качественные услуги и товары,
              необходимые для Вас. Наш сайт интернет-магазина поможет Вам быстро и легко найти
              необходимые товары. Мы постоянно создаём новые функции и инструменты, которые помогают
              нашим пользователям с легкостью пользоваться магазином. Здесь Вы можете найти всё, по
              доступным ценам и быстрой доставке. Выбирай ALTAIR, будь частью нашей команды.
            </Typography>
          </Box>
        </Modal>
      </React.Fragment>
    </div>
  );
};
