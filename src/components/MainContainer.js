import { Categories } from './Categories';
import { Products } from './Products';
import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const MainContainer = () => {
  const [currentTab, setCurrentTab] = useState(null);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#C4C4C4',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingTop: '-5%',
      }}
    >
      {currentTab === null ? (
        <Categories setCurrentTab={setCurrentTab} />
      ) : (
        <>
          <div>
            <Button
              onClick={() => {
                setCurrentTab(null);
              }}
              variant="contained"
              sx={{ backgroundColor: '#5F5F5F', width: 150, height: 60 }}
              startIcon={<ArrowBackIcon />}
            >
              Назад
            </Button>
            <Products catId={currentTab} />
          </div>
        </>
      )}
    </Box>
  );
};
